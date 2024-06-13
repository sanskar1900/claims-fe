import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { TbExclamationMark } from "react-icons/tb";
import "./claimdetails.css";

const ClaimDetails = ({ selectedEmployee }) => {
    return (
        <div className="claim-details-root">
            <h4>Request Details</h4>
            <div className="claim-details-profile">
                <div>
                    <div className="claim-details-profile-flex">
                        <div className="claim-profile-image"></div>
                        <div >
                            <div className="claim-profile-name">{selectedEmployee.name}</div>
                            <div className="claim-profile-designation">{selectedEmployee.designation}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="clain-details-requested-on">
                        {"Requested " + selectedEmployee.requestedOn}
                    </div>
                    <div className="clain-details-requested-date">

                    </div>
                </div>
            </div>
            <h4>Payment Terms</h4>
            <div className="claim-details-payment">
                <div>
                    <FaMoneyBill className="money" />
                    <div className="claim-profile-designation">Deductable amount</div>
                    <div className="claim-details-amount">{selectedEmployee.amountPayble}</div>
                </div>
                <div>
                    <SlCalender className="cal" />
                    <div className="claim-profile-designation">Tenure</div>
                    <div className="claim-details-amount">{selectedEmployee.tenure}</div>
                </div>
            </div>
            <div className="claim-details-mark">
                <TbExclamationMark className="mark" />
                <div>{`${selectedEmployee.amountPayble} to be deducted from ${selectedEmployee.name}'s monthly salary under the non-taxable device allowance section over a period of 6 months`}</div>
            </div>
            <h4>Claimed Items</h4>
            <div className="claim-details-device">
                <div>
                    <h4>{selectedEmployee.device}</h4>
                </div>
                <div>
                    <h4>{selectedEmployee.totalAmount}</h4>
                </div>
            </div>
        </div>
    )
}
export default ClaimDetails;