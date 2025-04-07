import React from "react";
import { Button, Space, message } from "antd";
import axios from "axios";

export const getLoanStatusButtons = (loanId: number): React.ReactNode => {
    const handleStatusChange = async (status: string) => {
        try {
            await axios.put(
                `http://localhost:3000/api/dashboard/verifier/update-status`,
                { loanId, status },
                { withCredentials: true }
            );
            message.success(`Status updated to ${status} for loan ${loanId}`);
            window.location.reload();
        } catch (err) {
            message.error("Failed to update loan status.");
        }
    };

    return (
        <Space>
            <Button size="small" onClick={() => handleStatusChange("approved")}>Approve</Button>
            <Button size="small" danger onClick={() => handleStatusChange("rejected")}>Reject</Button>
        </Space>
    );
};
