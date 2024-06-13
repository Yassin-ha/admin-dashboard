import React, { useState } from "react";
import Table from "./Table";
import SearchBar from "./SearchBar";
import { Column } from "react-table";

interface Data {
    "رقم اطلب": number;
    "رقم المعلن": number;
    "مسافة الطريق": string;
    "مبلغ الطلب": string;
    "رقم هاتف العميل": string;
    "اسم العميل": string;
    "اسم السائق": string;
    " رقم السائق": string;
    " رقم مركبة السائق": string;
    " تاريخ نشر": string;
    "حالة الطلب": string;
}

const TableOne: React.FC = () => {
    const initialData: Data[] = [
        {
            "رقم اطلب": 1,
            "رقم المعلن": 123,
            "مسافة الطريق": "10km",
            "مبلغ الطلب": "1000",
            "رقم هاتف العميل": "0123456789",
            "اسم العميل": "John Doe",
            "اسم السائق": "Driver A",
            " رقم السائق": "987654321",
            " رقم مركبة السائق": "ABC123",
            " تاريخ نشر": "2024-06-01",
            "حالة الطلب": "Pending",
        },
        {
            "رقم اطلب": 1,
            "رقم المعلن": 123,
            "مسافة الطريق": "10km",
            "مبلغ الطلب": "1000",
            "رقم هاتف العميل": "0123456789",
            "اسم العميل": "John Doe",
            "اسم السائق": "Driver A",
            " رقم السائق": "987654321",
            " رقم مركبة السائق": "ABC123",
            " تاريخ نشر": "2024-06-01",
            "حالة الطلب": "Pending",
        },
        {
            "رقم اطلب": 1,
            "رقم المعلن": 123,
            "مسافة الطريق": "10km",
            "مبلغ الطلب": "1000",
            "رقم هاتف العميل": "0123456789",
            "اسم العميل": "John Doe",
            "اسم السائق": "Driver A",
            " رقم السائق": "987654321",
            " رقم مركبة السائق": "ABC123",
            " تاريخ نشر": "2024-06-01",
            "حالة الطلب": "Pending",
        },
        {
            "رقم اطلب": 1,
            "رقم المعلن": 123,
            "مسافة الطريق": "10km",
            "مبلغ الطلب": "1000",
            "رقم هاتف العميل": "0123456789",
            "اسم العميل": "John Doe",
            "اسم السائق": "Driver A",
            " رقم السائق": "987654321",
            " رقم مركبة السائق": "ABC123",
            " تاريخ نشر": "2024-06-01",
            "حالة الطلب": "Pending",
        },
        {
            "رقم اطلب": 1,
            "رقم المعلن": 123,
            "مسافة الطريق": "10km",
            "مبلغ الطلب": "1000",
            "رقم هاتف العميل": "0123456789",
            "اسم العميل": "John Doe",
            "اسم السائق": "Driver A",
            " رقم السائق": "987654321",
            " رقم مركبة السائق": "ABC123",
            " تاريخ نشر": "2024-06-01",
            "حالة الطلب": "Pending",
        },
        {
            "رقم اطلب": 1,
            "رقم المعلن": 123,
            "مسافة الطريق": "10km",
            "مبلغ الطلب": "1000",
            "رقم هاتف العميل": "0123456789",
            "اسم العميل": "John Doe",
            "اسم السائق": "Driver A",
            " رقم السائق": "987654321",
            " رقم مركبة السائق": "ABC123",
            " تاريخ نشر": "2024-06-01",
            "حالة الطلب": "Pending",
        },
        {
            "رقم اطلب": 1,
            "رقم المعلن": 123,
            "مسافة الطريق": "10km",
            "مبلغ الطلب": "1000",
            "رقم هاتف العميل": "0123456789",
            "اسم العميل": "John Doe",
            "اسم السائق": "Driver A",
            " رقم السائق": "987654321",
            " رقم مركبة السائق": "ABC123",
            " تاريخ نشر": "2024-06-01",
            "حالة الطلب": "Pending",
        },
        // More data here...
    ];

    const columns: Column<Data>[] = React.useMemo(
        () => [
            { Header: "رقم اطلب", accessor: "رقم اطلب" },
            { Header: "رقم المعلن", accessor: "رقم المعلن" },
            { Header: "مسافة الطريق", accessor: "مسافة الطريق" },
            { Header: "مبلغ الطلب", accessor: "مبلغ الطلب" },
            { Header: "رقم هاتف العميل", accessor: "رقم هاتف العميل" },
            { Header: "اسم العميل", accessor: "اسم العميل" },
            { Header: "اسم السائق", accessor: "اسم السائق" },
            { Header: " رقم السائق", accessor: " رقم السائق" },
            { Header: " رقم مركبة السائق", accessor: " رقم مركبة السائق" },
            { Header: " تاريخ نشر", accessor: " تاريخ نشر" },
            { Header: "حالة الطلب", accessor: "حالة الطلب" },
        ],
        []
    );

    const [query, setQuery] = useState<string>("");

    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery);
    };

    return (
        <div className="App">
            <h3 className="mb-2 font-bold text-2xl text-black dark:text-white">الطلبات</h3>
            <SearchBar onSearch={handleSearch} />
            <Table columns={columns} data={initialData} globalFilter={query} />
        </div>
    );
};

export default TableOne;
