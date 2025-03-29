import React, { useEffect, useRef } from "react";
import logo from './imgs/layer3.png';
import { Link } from 'react-router-dom';
import QRCodeStyling from "qr-code-styling";
import share from './imgs/share.png';
import xion from './imgs/xion_token.png';

const ReceiveXion = () => {
    const qrRef = useRef(null);
    const xionAddress = "xion1sjv8p79cwm08m8nm8e6yntuvjxj53hd7e4l6y3";

    useEffect(() => {
        const qrCode = new QRCodeStyling({
            width: 200,
            height: 200,
            data: xionAddress,
            dotsOptions: { color: "#000", type: "dots" },
            backgroundOptions: { color: "#fff" },
        });

        if (qrRef.current) {
            qrRef.current.innerHTML = "";
            qrCode.append(qrRef.current);
        }
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText(xionAddress)
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
                        <img className="token" alt="xion" src={xion} />
                        <p>XION Address</p>
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
                    <p className="pequena">{xionAddress}</p>
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

export default ReceiveXion;
