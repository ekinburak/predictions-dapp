// app/src/pages/index.tsx

import React from 'react';
import { NavBar } from "@/components/NavBar";
import { Header } from '@/components/header';
import { PythSendUsd } from '@/components/pyth_send_usd';
import { Oracle } from '@/components/oracle';
import './style.css'

const IndexPage: React.FC = () => {
    return (
        <div>
            <NavBar />
            <Header />
            <PythSendUsd />
            <Oracle />
        </div>
    );
};

export default IndexPage;
