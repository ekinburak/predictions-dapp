// app/src/pages/index.tsx

import React from "react";
import { NavBar } from "@/components/NavBar";
import { PythPriceFeed } from "@/components/PythPriceFeed";
import { BettingComponent } from "@/components/PriceGraphBet";
import AvailableBets from "@/components/AvailableBets";

import "./style.css";

const IndexPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <BettingComponent />
      <AvailableBets />
    </div>
  );
};

export default IndexPage;
