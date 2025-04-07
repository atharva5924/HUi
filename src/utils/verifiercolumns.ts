import { TableColumnsType } from "antd";
import { Status } from "./columns";
import { v4 as uuid } from "uuid";
import { getLoanStatusButtons } from "../components/LoanButtons";

export interface LoanDetailsVerifier {
    "id": number,
    "User Recent Activity": string,
    "Customer name": string,
    "Date": string,
    "Action": Status,
    "key": string
}

export const verifierColumns: TableColumnsType<LoanDetailsVerifier> = [
    {
        title: "id",
        dataIndex: "id",
        key: uuid()
    },
    {
        title: "User Recent Activity",
        dataIndex: "User Recent Activity",
        key: uuid()
    },
    {
        title: "Customer name",
        dataIndex: "Customer name",
        key: uuid()
    },
    {
        title: "Date",
        dataIndex: "Date",
        key: uuid()
    },
    {
        title: "Action",
        dataIndex: "Action",
        key: uuid()
    },
    {
        title: "Actions",
        key: uuid(),
        render: (_text, record) => getLoanStatusButtons(record.id),
    },

] 