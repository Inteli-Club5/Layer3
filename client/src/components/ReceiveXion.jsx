import React, { useEffect, useRef, useState } from "react";
import logo from './imgs/layer3.png';
import { Link } from 'react-router-dom';
import QRCodeStyling from "qr-code-styling";
import share from './imgs/share.png';
import xion from './imgs/xion_token.png';
import {
    getAddressXion
} from '../../../blockchain/index';

const ReceiveXion = () => {
    const [xionAddress, setXionAddress] = useState(undefined);
    const qrRef = useRef(null);

    useEffect(() => {
        const fetchXionAddress = async () => {
            try {
                setXionAddress(await getAddressXion());
            } catch (error) {
                console.error("Error fetching XION address:", error);
            }
        };

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

        fetchXionAddress();
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
