import React, { useState } from "react";
import "./claim.css";
import Divider from "../../components/Divider";
import { claimMenu } from "../../constants";
import ClaimDetails from "../../components/ClaimDetails";
import PaymentBreakDown from "../../components/PaymentBreakdown";
import Documents from "../../components/Documents";
import ApprovalClaim from "../../components/AppprovalClaim";
const ClaimScreen = ({ selectedEmployee, setSelectedEmployee }) => {
    const [selectedClaimMenu, setSelectedClaimMenu] = useState(1);
    const handleGoToAllClaims = () => {
        setSelectedEmployee(null);
    }
    const handleChangeMenu = (id) => {
        setSelectedClaimMenu(id);
    }
    const renderMenuDetails = () => {
        switch (selectedClaimMenu) {
            case 1:
                return <ClaimDetails selectedEmployee={selectedEmployee} />
                break
            case 2:
                return <PaymentBreakDown />
                break
            case 3:

                return <Documents />
                break
            default:
                break
        }
    }
    return (
        <div className="claim-root">
            <div className="claim-heading">
                <div onClick={handleGoToAllClaims} className="go-back">{"< Back"}</div>
                <div>{`${selectedEmployee.name.split(" ")[0]}'s Claim`}</div>
            </div>
            <div className="claims-menu">
                {claimMenu.map((data) => {
                    return (
                        <div>
                            <div onClick={() => { handleChangeMenu(data.id) }} className="padding-select" key={data.id}>
                                <div className={selectedClaimMenu === data.id ? "menu-content-selected" : "menu-content"}>
                                    {data.name}
                                </div>
                            </div>
                            {selectedClaimMenu === data.id && <div className="highlight"></div>}
                        </div>
                    )
                })}
            </div>
            {renderMenuDetails()}
            <Divider fullwidth={true} color={"#eeeeee"} />
            <ApprovalClaim approvals={selectedEmployee.approvalChain} />
        </div>
    )
}
export default ClaimScreen;