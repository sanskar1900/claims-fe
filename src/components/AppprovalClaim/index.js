import React, { useState } from "react"
import { MdVerified } from "react-icons/md";
import "./approval.css"
import { getSuffix } from "../../utils";
import Divider from "../Divider";
const ApprovalClaim = ({ approvals }) => {
    const [increaseLimit, setIncreaseLimit] = useState(false);
    return (
        <div className="chain-root">
            <div className="chain-flex">
                <MdVerified className="verified" />
                {!increaseLimit ? <div style={{ width: "90%" }}>
                    <div className="chain-claim">Approve claim</div>
                    <div className="chain-desc">{"Your organisation has set up a multi-level claim approval process"}</div>
                    <div className="chain">
                        {approvals.map((data, index) => {
                            return (
                                <div className="approvals">
                                    <div >
                                        <div className="number">{index + 1}</div>
                                        {index !== approvals.length - 1 && <div className="saperate"></div>}
                                    </div>
                                    <div>
                                        <div className="approval-name">
                                            {index === approvals?.length - 1 ? "Last Approval" : `${index + 1}` + getSuffix(index + 1) + " Approval"}
                                        </div>
                                        <div className="approval-profile-details">
                                            {data.name}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <Divider fullwidth={true} color={"#eeeeee"} />
                    <div>{"Not having enought time after office to complete further, I've built the basic LLD and code flow of the application. Thank you."}</div>
                </div> : <></>}
            </div>
        </div>
    )
}
export default ApprovalClaim;