import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Header } from "./components/Header";
import "./styles/index.scss";

export const DetailsPage = (props) => {
    const { location: { state } } = props;
    const selectedUser = state && state.data && state.data;
    if (state && state.data && Object.keys(state.data).length > 0) {
        return (
            <Fragment>
                <Header />
                <h3 className="root offset-md-2">{selectedUser.first_name}{" "}{selectedUser.last_name}</h3>
                <table className="root offset-md-2 col-md-6 table">
                    <tbody>
                        <tr>
                            <th>Company</th>
                            <th>:</th>
                            <td>{selectedUser.company_name}</td>
                        </tr>
                        <tr>
                            <th>State</th>
                            <th>:</th>
                            <td>{selectedUser.state}</td>
                        </tr>
                        <tr>
                            <th>Zip</th>
                            <th>:</th>
                            <td>{selectedUser.zip}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <th>:</th>
                            <td>{selectedUser.email}</td>
                        </tr>
                        <tr>
                            <th>Web</th>
                            <th>:</th>
                            <td>{selectedUser.web}</td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <th>:</th>
                            <td>{selectedUser.age}</td>
                        </tr>
                    </tbody>
                </table>
                {/* <div className="offset-md-2 grid root">
                    <strong>Company</strong>{" : "}<span>{selectedUser.company_name}</span><br />
                    <strong>City</strong>{" : "}<span>{selectedUser.city}</span><br />
                    <strong>State</strong>{" : "}<span>{selectedUser.state}</span><br />
                    <strong>Zip</strong>{" : "}<span>{selectedUser.zip}</span><br />
                    <strong>Email</strong>{" : "}<span>{selectedUser.email}</span><br />
                    <strong>Web</strong>{" : "}<span>{selectedUser.web}</span><br />
                    <strong>Age</strong>{" : "}<span>{selectedUser.age}</span><br />
                </div> */}
            </Fragment>
        );
    }
    else return (
        <div className="text-center root">
            <h2> Please select user from user list</h2>
            <h6><Link to={{ pathname: "/", state: undefined }}>Click here</Link> to go back</h6>
        </div>
    )
}