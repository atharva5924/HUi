import { TableColumnsType } from "antd";
import { getRoleButtons } from "../components/RoleButtons";
import { v4 as uuid } from "uuid";

export interface UserInterfaceVerifier {
    "Username": string,
    "Email": string,
    "Role": string
}


export const adminUserColumns: TableColumnsType<UserInterfaceVerifier> = [
    {
        title: "Username",
        dataIndex: "Username",
        key: uuid(),
    },
    {
        title: "Email",
        dataIndex: "Email",
        key: uuid(),
    },
    {
        title: "Role",
        dataIndex: "Role",
        key: uuid(),
    },
    {
        title: "Actions",
        key: uuid(),
        render: (_text, record) => getRoleButtons(record.Email),
        
    },
];

export interface AdminUser {
    id: number;
    email: string;
    password: string;
    username: string;
    role: string;
    createdAt: string;
    updatedAt: string;
}

export type AdminUserResponse = AdminUser[];