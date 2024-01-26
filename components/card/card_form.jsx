
"use client";

import React, { useState } from 'react';
import Link from "next/link";
import CustomButton from '../custombutton';

const Card_Form = ({ title, label, href, hyprlink, btnLabel, onClick, bntHref }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    return (
        <div className="bg-tcp2 p-8 shadow-md w-96"
            style={{
            height: "550px",
            width: "400px",
            paddingTop: "125px",
            borderRadius: "24px",
        }}
        >
            <h2 className="text-2xl font-bold mb-4 text-white text-center">
                {title}
            </h2>
            <h2 className="text-1xl mb-4 text-white text-center">
                {label}
            </h2>
            {/* Input Text */}
            <form>
            <div className="mb-4 pb-2">
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300"
                style={{ borderRadius: "11px" }}
                placeholder="Username"
                required
            />
            </div>
            <div className="mb-4 pb-5">
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300"
                style={{ borderRadius: "11px" }}
                placeholder="Password"
                required
            />
            <Link href={href}>
                <p className="block pt-2 pl-2 text-white text-sm font-medium mb-2 hover:underline">
                {hyprlink}
                </p>
            </Link>
            </div>
            <CustomButton label={btnLabel} onClick={onClick} href={bntHref} /> {/* Corrected prop name */}
        </form>
        </div>
    )
}

export default Card_Form;
