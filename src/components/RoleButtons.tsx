
import React from "react";
import { Button, Space, message } from "antd";
import axios from "axios";

export const getRoleButtons = (email: string): React.ReactNode => {
  const handleRoleChange = async (role: string) => {
    try {
      await axios.put(
        `http://localhost:3000/api/dashboard/admin/users/update`,
        { email, role },
        { withCredentials: true }
      );
      message.success(`Role updated to ${role} for ${email}`);
    
      window.location.reload();

    } catch (err) {
      message.error("Failed to update role.");
    }
  };

  return (
    <Space>
      <Button size="small" onClick={() => handleRoleChange("user")}>User</Button>
      <Button size="small" onClick={() => handleRoleChange("verifier")}>Verifier</Button>
      <Button size="small" onClick={() => handleRoleChange("admin")}>Admin</Button>
    </Space>
  );
};
