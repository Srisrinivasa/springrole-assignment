import React from 'react';
import ReactDOM from 'react-dom';
import { Routes } from "routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {store} from "store";
// import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(<Provider store={store}> <Routes /></Provider>, document.getElementById("root"));