import React, { useEffect, useRef } from "react";
import logo from '../src/components/imgs/layer3.png';
import { Link } from 'react-router-dom';
import QRCodeStyling from "qr-code-styling";
import share from '../src/components/imgs/share.png';
import eth from '../src/components/imgs/eth_token.png';

const ReceiveETH = () => {
    const qrRef = useRef(null);
    const ethAddress = "0x6a395e7AfD2Ddc7F68498f62D8AD3b72992E8Ab0";

    useEffect(() => {
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
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(ethAddress)
            .then(() => alert("Address copied successfully!"))
            .catch(err => console.error("Error: ", err));
    };

    return (
        <div className="wallet">
            <br />
            <div className="logozinha">
                <Link to="/">
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
