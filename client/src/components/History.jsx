import React, { useEffect, useState } from "react";
import logo from "./imgs/layer3.png";
import { Link } from "react-router-dom";

const History = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                // 1️⃣ Buscar o índice do último bloco
                const blockInfoRes = await fetch("https://rpc.xion-testnet-2.burnt.com/abci_info");
                const blockInfoData = await blockInfoRes.json();
                const lastBlockHeight = blockInfoData.result.response.last_block_height;

                // 2️⃣ Buscar transações do último bloco
                const txRes = await fetch(`https://api.xion-testnet-2.burnt.com/cosmos/tx/v1beta1/txs/block/${lastBlockHeight}`);
                const txData = await txRes.json();

                // 3️⃣ Atualizar estado com as transações
                setTransactions(txData.txs || []);
            } catch (error) {
                console.error("Error: ", error);
            }
        };

        fetchTransactions();
    }, []);

    return (
        <div className="wallet">
            <br />
            <div className="logozinha">
                <Link to="/wallet">
                    <img alt="logo" src={logo} />
                </Link>
            </div>
            <br />
            <div className="menu">
                <Link className="linkinzin" to="/wallet">
                    <p>Home</p>
                </Link>
                <Link className="linkin" to="/history">
                    <p className="ativado">History</p>
                </Link>
                <Link className="linkinzin" to="/education">
                    <p>Education</p>
                </Link>
            </div>
            <br />
            <div className="carteira">
                <p>Transaction History</p>
                <hr />
                {transactions.length > 0 ? (
                    transactions.map((tx, index) => (
                        <div key={index} className="ladinho">
                            <p className="pequeno">{tx.substring(0, 20)}...</p>
                        </div>
                    ))
                ) : (
                    <p className="pequeno">No Data</p>
                )}
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    );
};

export default History;