import React, { useEffect, useState } from "react"
import "./table.css"
import { users } from "../../constants";
import Divider from "../Divider";

const Table = ({ setSelectedEmployee }) => {
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsToRender, setItemsToRender] = useState([]);
    const totalPages = Math.ceil(users?.length / 8);
    useEffect(() => {
        const newList = users.slice((currentPage - 1) * 8, (currentPage - 1) * 8 + 8).filter((item) => item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
        setItemsToRender(newList);
    }, [searchText, currentPage])
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    }
    const handleSelectEmployee = (data) => {
        setSelectedEmployee(data);

    }
    return (
        <div className="table-root">
            <div className="table-heading">
                Claims
            </div>
            <Divider color={"#eeeeee"} fullwidth={true} />
            <div className="table-content">
                <div className="table-content-desc">
                    {`${users?.length}  employees want to claim their device allowances`}
                </div>
                <div className="table-content-desc-small">
                    {"Review their requests at the earliest to ensure a great benefit claim experience"}
                </div>
            </div>
            <input placeholder="Search by name" className="table-search" value={searchText} onChange={handleSearchChange} />
            <table className="table">
                <thead>
                    <tr>
                        <th>Employee</th>
                        <th>Device</th>
                        <th>Requested on</th>
                        <th>Amount Payable</th>
                        <th>Approve</th>
                    </tr>

                </thead>

                <tbody>
                    {itemsToRender?.map((data) => {
                        return (
                            <>
                                <tr onClick={() => { handleSelectEmployee(data) }} className="table-row">
                                    <td className="table-emploee-details">

                                        <div className="table-profile"></div>
                                        <div>
                                            <div className="primary">
                                                {data.name}
                                            </div>
                                            <div className="secondary">
                                                {data.designation}
                                            </div>
                                        </div>

                                    </td>
                                    <td>
                                        <div className="primary">
                                            {data.device}
                                        </div>
                                        <div className="secondary">
                                            {data.addsOn}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="primary">
                                            {data.requestedOn}
                                        </div>

                                    </td>
                                    <td>
                                        <div className="primary">
                                            {data.amountPayble}
                                        </div>
                                        <div className="secondary">
                                            {"For " + data.tenure}
                                        </div>
                                    </td>
                                    <td>
                                        <button className="approve">{"Approve >"}</button>
                                    </td>

                                </tr>


                            </>
                        )
                    })
                    }

                </tbody>
            </table>
            <div className="flex-saperate">
                <div className="secondary">{`Showing ${itemsToRender.length} out of ${users.length} people`}</div>
                <div className="flex-pagination">
                    <button disabled={currentPage === 1} onClick={() => { setCurrentPage(currentPage - 1) }} className="back">{"<"}</button>
                    {Array(totalPages).fill(null).map((data, index) => {
                        return (
                            <div className={index + 1 === currentPage ? "current-page" : "page"}>{index + 1}</div>
                        )
                    })}
                    <button disabled={currentPage === totalPages} onClick={() => { setCurrentPage(currentPage + 1) }} className="next">{">"}</button>
                </div>
            </div>
        </div>
    )
}
export default Table;