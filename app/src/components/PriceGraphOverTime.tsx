import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

interface PriceGraphOverTimeProps {
  priceData: { time: number; price: number }[];
}

function PriceGraphOverTime({ priceData }: PriceGraphOverTimeProps) {
  if (!priceData || priceData.length < 2) {
    return <p>Not enough data to display the chart.</p>;
  }

  // Calculate the start time
  const startTime = priceData[0].time;

  // Aggregate data into per-second intervals
  const perSecondMap = new Map<number, number>(); // Map of second => price

  priceData.forEach((dataPoint) => {
    const secondsSinceStart = Math.floor((dataPoint.time - startTime) / 1000);
    // For each second, keep the last price within that second
    perSecondMap.set(secondsSinceStart, dataPoint.price);
  });

  // Convert the Map to an array and compute price changes
  const perSecondData: { second: number; priceChange: number }[] = [];
  let previousPrice: number | null = null;

  const sortedSeconds = Array.from(perSecondMap.keys()).sort((a, b) => a - b);

  sortedSeconds.forEach((second) => {
    const currentPrice = perSecondMap.get(second)!;
    if (previousPrice !== null) {
      const priceChange = currentPrice - previousPrice;
      perSecondData.push({ second: second, priceChange });
    }
    previousPrice = currentPrice;
  });

  if (perSecondData.length === 0) {
    return <p>Not enough data to display the chart.</p>;
  }

  return (
    <div>
      <h2>Per-Second Price Change</h2>
      <LineChart
        width={600}
        height={300}
        data={perSecondData}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis
          dataKey="second"
          type="number"
          domain={["auto", "auto"]}
          tickFormatter={(second) => `${second + 1}s`}
          label={{ value: "Time (s)", position: "insideBottom", offset: -5 }}
        />
        <YAxis
          domain={["auto", "auto"]}
          tickFormatter={(value) => `$${value.toFixed(2)}`}
          label={{
            value: "Price Change ($)",
            angle: -90,
            position: "insideLeft",
          }}
        />
        <Tooltip
          labelFormatter={(label) => `Time: ${label + 1}s`}
          formatter={(value) => [
            `$${Number(value).toFixed(2)}`,
            "Price Change",
          ]}
        />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line
          name="Price Change"
          type="monotone"
          dataKey="priceChange"
          stroke="#82ca9d"
          dot={true}
          strokeWidth={2}
        />
      </LineChart>
    </div>
  );
}

export default PriceGraphOverTime;
