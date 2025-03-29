import React, { useState } from 'react';
import logo from '../src/components/imgs/layer3.png';
import { Link, useNavigate } from 'react-router-dom';
import xion from '../src/components/imgs/xion_token.png';
import eth from '../src/components/imgs/eth_token.png';
import first from '../src/components/imgs/first.png';
import second from '../src/components/imgs/second.png';
import button_one from '../src/components/imgs/BorrowBook.png';
import button_two from '../src/components/imgs/Sent.png';
import button_three from '../src/components/imgs/Testnet.png';
import learn from '../src/components/imgs/learn.png';

const Wallet = () => {

    const [transactions, setTransactions] = useState([]);
    const [xionPrice, setXionPrice] = useState(0);
    const [ethPrice, setEthPrice] = useState(0);

    const cryptoCompareApiKey = import.meta.env.VITE_CRYPTO_COMPARE_API_KEY;
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
                const res = await fetch(
                    `https://min-api.cryptocompare.com/data/price?fsym=XION&tsyms=USD&api_key=${cryptoCompareApiKey}`
                );

                const data = await res.json();
                setXionPrice(data.USD || 0);
            } catch (error) {
                console.error("Error fetching XION price:", error);
            }
        };

        const fetchEthPrice = async () => {
            try {
                const res = await fetch(
                    `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&api_key=${cryptoCompareApiKey}`
                );

                const data = await res.json();
                setEthPrice(data.USD || 0);
            } catch (error) {
                console.error("Error fetching Ethereum price:", error);
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
                <Link to="/wallet">
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
            </div>
            <br />
            <div className="carteira">
                <p className="primeiro">Personal Account</p>
                <br />
                <p className="segundo">$ 0.00</p>
                <br />
                <div className="botoes">
                    <Link className="nothing" to="/receive-xion">
                        <button>
                            <img src={button_one} alt="Receive" />
                            Receive
                        </button>
                    </Link>
                    <Link className="nothing" to="/send">
                        <button className="lado">
                            <img src={button_two} alt="Send" />
                            Send
                        </button>
                    </Link>
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
                    <Link className="nothing" to="/receive-eth">
                        <button>
                            <img src={button_one} alt="Receive" />
                            Receive
                        </button>
                    </Link>
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
            </div>
            <br />
        </div>
    );
};

export default Wallet;
