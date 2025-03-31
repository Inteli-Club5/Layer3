import React, { useEffect, useRef, useState } from "react";
import logo from './imgs/layer3.png';
import { Link } from 'react-router-dom';
import QRCodeStyling from "qr-code-styling";
import share from './imgs/share.png';
import eth from './imgs/eth_token.png';
import {
    getAddressEth
} from '../../../blockchain/index';

const ReceiveETH = () => {
    const qrRef = useRef(null);
    const [ethAddress, setEthAddress] = useState(undefined);

    useEffect(() => {
        const fetchAddressEth = async () => {
            try {
                setEthAddress(await getAddressEth());
            } catch (error) {
                console.error("Error fetching ETH address:", error);
            }
        };

        fetchAddressEth();
    }, []);

    const qrCode = new QRCodeStyling({
        width: 200,
        height: 200,
        data: ethAddress,
        dotsOptions: { color: "#000", type: "dots" },
        backgroundOptions: { color: "#fff" },
    });

    if (qrRef.current) {
        qrRef.current.innerHTML = "";
        qrCode.append(qrRef.current);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(ethAddress)
            .then(() => alert("Address copied successfully!"))
            .catch(err => console.error("Error: ", err));
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
                <center>
                    <div className="first">
                        <img className="token" alt="eth" src={eth} />
                        <p>ETH Address</p>
                    </div>
                    <br />
                    <div
                        ref={qrRef}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "10px",
                            borderRadius: "10px",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                        }}
                    ></div>
                    <br />
                    <p className="pequena">{ethAddress}</p>
                    <hr />
                    <button
                        onClick={handleCopy}
                    >
                        <img src={share} alt="Share" />
                        Share
                    </button>
                </center>
            </div>
            <br /><br />
        </div>
    );
};

export default ReceiveETH;
