"use client";
import React, {useEffect, useState} from "react";
import * as client from "./client";
export default function HttpClient () {
    const [WelcomeOnClick, setWelcomeOnClick] = useState(" ");
    const [WelcomeOnLoad, setWelcomeOnLoad] = useState(" ");
    const fetchWelcomeOnClick = async () => {
        const message = await client.fetchWelcomeMessage();
        setWelcomeOnClick(message);
    };
    const fetchWelcomeOnLoad = async () => {
        const welcome = await client.fetchWelcomeMessage();
        setWelcomeOnLoad(welcome);
    };
    useEffect(() => {
        fetchWelcomeOnLoad();
    }, []);
    return (
        <div>
            <h3>HTTP Client</h3>
            <h4>Requesting on Click</h4>
            <button className="btn btn-primary me-2" onClick={fetchWelcomeOnClick}>Fetch Welcome</button>
            <br/>
            <h4>Requesting on Load</h4>
            Response From Server: <b>{WelcomeOnLoad}</b>
            <hr/>
        </div>
    );
}