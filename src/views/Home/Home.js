import React, { useState } from "react";
import './Home.css';
import I18n from "./../../utils/i18n";

function Home() {
    const usersCount = 30;


    return (
        <>
        <h1 className="heading">React I18n</h1>
            <div className="main-container">
                <div>
                    <h1 >{I18n("welcomeMessage")}</h1>
                    <h4>{I18n("normalMessage")}</h4>

                    <h3>{I18n("greetingMessage")}</h3>
                    <h4>{I18n("endMessage")}</h4>
                    <h4>{I18n("usersStatMessage", "<studentCount>", usersCount)} </h4>
                </div>

                <div>
                    <h4>{I18n("selectLang")}</h4>
                    <select className="select-bar"
                        defaultValue={localStorage.getItem("lang")}
                        onChange={(e) => {
                            localStorage.setItem("lang", e.target.value);
                            window.location.reload();
                        }}>
                        <option value={"mr"}>मराठी</option>
                        <option value={"hi"}>हिंदी</option>
                        <option value={"en"}>English</option>

                    </select>
                </div>
            </div>
        </>
    )
}
export default Home

