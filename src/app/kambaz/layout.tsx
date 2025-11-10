"use client";
import { ReactNode } from "react";
import "./styles.css";
import store from "./store";
import { Provider } from "react-redux";
import Kambaznavigation from "./navigation";
export default function KambazLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <Provider store={store}>
        <div id="wd-kambaz">
            <div className="d-flex">
                <div>
                    <Kambaznavigation />
                </div>
                <div className="wd-main-content-offset p-3 flex-fill">
                    {children}
                </div>
            </div>
        </div>
        </Provider>
    );
}
