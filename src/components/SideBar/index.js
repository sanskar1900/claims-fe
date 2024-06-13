import React, { useState } from "react"
import "./sidebar.css"
import Divider from "../Divider";
import { menu } from "../../constants";
const SideBar = ({ setSelectedMenu }) => {
    const [selectedMenuId, setSelectedMenuId] = useState(1);
    const handleChangeSelectedMenuId = (id) => {
        setSelectedMenuId(id);
        setSelectedMenu(id);
    }
    return (
        <div className="sidebar-root">
            <div className="sidebar-flex">
                <img src="" alt="company-logo" />
                <label className="sidebar-company">tortoise</label>
            </div>
            <Divider fullwidth={false} color={"#B8AFA4"} />
            {menu.map((data) => {
                return (
                    <div onClick={() => handleChangeSelectedMenuId(data.id)} className={data.id === selectedMenuId ? "sidebar-selected-menu-item" : "sidebar-menu-item"}>
                        <div>
                            {data?.name}
                        </div>
                        <div className="sidebar-value">
                            {data?.value}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default SideBar;