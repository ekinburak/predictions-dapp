// app/src/pages/index.tsx

import React from 'react';
import { NavBar } from "@/components/NavBar";
import { PriceGraphBet } from '@/components/PriceGraphBet';
import './style.css'

const IndexPage: React.FC = () => {
    return (
        <div>
            <NavBar />
            <PriceGraphBet />
        </div>
    );
};

export default IndexPage;
