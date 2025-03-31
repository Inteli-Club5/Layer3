import React, { useEffect, useState } from "react";
import logo from './imgs/layer3.png';
import { Link } from 'react-router-dom';
import xion from './imgs/xion_token.png';
import eth from './imgs/eth_token.png';
import button_two from './imgs/Sent.png';
import {
    getAddressXion,
    sendXionTransaction
} from '../../blockchain/index';

const Send = () => {
    const [toAddress, setToAddress] = useState("");
    const [value, setValue] = useState("");
    const [xionAddress, setXionAddress] = useState("");

    useEffect(() => {
        const fetchXionAddress = async () => {
            try {
                const address = await getAddressXion();
                setXionAddress(address);
            } catch (error) {
                console.error("Error fetching XION address:", error);
            }
        };

        fetchXionAddress();
    }, []);

    const handleSendTransaction = async () => {
        if (toAddress && value) {
            await sendXionTransaction(xionAddress, toAddress, value);
            alert("Transaction sent successfully!");
        } else {
            alert("Please enter a valid address and amount.");
        }
    };

    return (
        <div className="wallet">
            <br />
            <div className="logozinha">
                <Link to="/wallet">
                    <img alt="logo" src={logo} />
                </Link>
            </div>
            <br />
            <div className="carteira">
                <p className="primeiro">From</p>
                <div className="left">
                    <p className="pequena2">{xionAddress}</p>
                    <img className="token" alt="xion" src={xion} />
                </div>
                <br />
                <p className="primeiro">To</p>
                <div className="left">
                    <input
                        className="pequena4"
                        value={toAddress}
                        onChange={(e) => setToAddress(e.target.value)}
                    />
                    <img className="token" alt="eth" src={eth} />
                </div>
                <br />
                <p className="primeiro">Value</p>
                <div className="left">
                    <input
                        type="number"
                        className="pequena4"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <img className="token" alt="eth" src={eth} />
                </div>
                <br />
                <center>
                    <hr />
                    <br />
                    <Link class="linkin" to="/wallet">
                        <button onClick={handleSendTransaction}>
                            <img src={button_two} alt="Share" />
                            Send
                        </button>
                    </Link>
                </center>
                <div></div>
            </div>
            <br /><br />
        </div>
    );
};

export default Send;
