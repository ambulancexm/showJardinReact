import React, { Component } from 'react';
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash ,FaChartArea, FaChartLine} from 'react-icons/fa'
import { GrAction } from "react-icons/gr";
import {NavLink } from "react-router-dom";


class Footer extends Component {
    render() {
        return (
            <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                <div className="btn-group">
                    <NavLink to="/" className="btn btn-outline-dark bg-light"><FaListAlt /></NavLink>
                    <NavLink to="/completed" className="btn btn-outline-dark bg-light">< FaCheckSquare /></NavLink>
                    <NavLink to="/add-task" className="btn btn-outline-dark bg-light"><FaPlusSquare /></NavLink>
                    <NavLink to="/connexion" className="btn btn-outline-dark bg-light"><GrAction /></NavLink>
                    <NavLink to="/chart" className="btn btn-outline-dark bg-light"><FaChartArea /></NavLink>
                    <NavLink to="/chart2" className="btn btn-outline-dark bg-light"><FaChartLine /></NavLink>
                </div>
                <button className="btn btn-outline-dark bg-light"><FaTrash /></button>
            </footer>
        );
    }
}

export default Footer;
