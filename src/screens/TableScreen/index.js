import React, { useState } from "react";
import "./tablescreen.css";
import SideBar from "../../components/SideBar";
import Table from "../../components/Table";
import ClaimScreen from "../ClaimScreen";
const TableScreen = ({ setShowClaimsTable, setSelectedEmployee, selectedEmployee }) => {
    const [selectedMenu, setSelectedMenu] = useState(1);
    return (
        <div className="tablescreen-root">
            <SideBar setSelectedMenu={setSelectedMenu} />
            {selectedMenu === 1 ? selectedEmployee === null ? <Table setSelectedEmployee={setSelectedEmployee} /> : <ClaimScreen setSelectedEmployee={setSelectedEmployee} selectedEmployee={selectedEmployee} /> : <h3>Please select "claims" to watch claims table!</h3>}
        </div>
    )
}
export default TableScreen;