import React from "react";
import "../styles/Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="navbar navbar-dark bg-primary">

            <h2 className="col-md-3 white">
                <Link className="link" to={{ pathname: "/", state: undefined }}>&#8678;
                </Link> Details Page</h2>
        </div>
    );
}
