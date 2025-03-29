import React, { useEffect, useState } from "react";
import logo from './imgs/layer3.png';
import { Link, useNavigate } from 'react-router-dom';
import xion from './imgs/xion_token.png';
import eth from './imgs/eth_token.png';
import first from './imgs/first.png';
import second from './imgs/second.png';
import button_one from './imgs/BorrowBook.png';
import button_two from './imgs/Sent.png';
import learn from './imgs/learn.png';

const Wallet = () => {

    const [transactions, setTransactions] = useState([]);
    const [xionPrice, setXionPrice] = useState(0);
    const [ethPrice, setEthPrice] = useState(0);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const blockInfoRes = await fetch("https://rpc.xion-testnet-2.burnt.com/abci_info");
                const blockInfoData = await blockInfoRes.json();
                const lastBlockHeight = blockInfoData.result.response.last_block_height;
                const txRes = await fetch(`https://api.xion-testnet-2.burnt.com/cosmos/tx/v1beta1/txs/block/${lastBlockHeight}`);
                const txData = await txRes.json();
                setTransactions(txData.txs || []);
            } catch (error) {
                console.error("Error: ", error);
            }
        };

        const fetchXionPrice = async () => {
            try {
                const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=xion&vs_currencies=usd");
                const data = await res.json();
                setXionPrice(data.xion.usd || 0);
            } catch (error) {
                console.error("Erro ao buscar preço do XION:", error);
            }
        };

        const fetchEthPrice = async () => {
            try {
                const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
                const data = await res.json();
                setEthPrice(data.ethereum.usd || 0);
            } catch (error) {
                console.error("Erro ao buscar preço do Ethereum:", error);
            }
        };

        fetchTransactions();
        fetchXionPrice();
        fetchEthPrice();
    }, []);

    return (
        <div className="wallet">
            <br />
            <div className="logozinha">
                <Link to="/">
                    <img alt="logo" src={logo} />
                </Link>
            </div>
            <br />
            <div className="menu">
                <Link className="linkin" to="/wallet">
                    <p className="ativado">Home</p>
                </Link>
                <Link className="linkinzin" to="/history">
                    <p>History</p>
                </Link>
                <Link className="linkinzin" to="/education">
                    <p>Education</p>
                </Link>
            </div>
            <br />
            <div className="carteira">
                <p className="primeiro">Personal Account</p>
                <br />
                <p className="segundo">$ 0.00</p>
                <br />
                <div className="botoes">
                    <button>
                        <img src={button_one} alt="Receive" />
                        Receive
                    </button>
                    <button className="lado">
                        <img src={button_two} alt="Send" />
                        Send
                    </button>
                </div>
                <br />
                <hr />
                <div className="carteira2">
                    <div className="first">
                        <img className="token" alt="xion" src={xion} />
                        <p>XION</p>
                    </div>
                    <div className="second">
                        <p className="gigante">${xionPrice.toFixed(2)}</p>
                        <p className="informacao">Current price</p>
                    </div>
                    <div className="second">
                        <p className="gigante">$ 0.00</p>
                        <p className="informacao">0.0000 XION</p>
                    </div>
                </div>
            </div>
            <br />
            <div className="carteira">
                <p className="primeiro">Personal Account</p>
                <br />
                <p className="segundo">$ 0.00</p>
                <br />
                <div className="botoes">
                    <button>
                        <img src={button_one} alt="Receive" />
                        Receive
                    </button>
                </div>
                <br />
                <hr />
                <div className="carteira22">
                    <div className="first">
                        <img className="tokenzin" alt="first" src={first} />
                        <img className="token" alt="eth" src={eth} />
                        <p>ETH</p>
                        <img className="token2" alt="second" src={second} />
                    </div>
                    <div className="second">
                        <p className="gigante">${ethPrice.toFixed(2)}</p>
                        <p className="informacao">Current price</p>
                    </div>
                    <div className="second">
                        <p className="gigante">$ 0.00</p>
                        <p className="informacao">0.0000 ETH</p>
                    </div>
                </div>
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
                <div />
                <br />
                <br />
                <br />
                <center>
                    <Link className="linkin" to="/history">
                        <button>History</button>
                    </Link>
                </center>
            </div>
            <br />
            <div>
                <Link className="linkin" to="/education">
                    <img className="tam" alt="learn" src={learn} />
                </Link>
            </div>
            <br />
        </div>
    );
};

export default Wallet;
