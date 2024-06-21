import React, { useState } from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import { Column } from 'react-table';

interface Data {
    'رقم اطلب': number;
    'رقم المعلن': number;
    'مسافة الطريق': string;
    'مبلغ الطلب': string;
    'رقم هاتف العميل': string;
    'اسم العميل': string;
    'اسم السائق': string;
    ' رقم السائق': string;
    ' رقم مركبة السائق': string;
    ' تاريخ نشر': string;
    'حالة الطلب': string;
}

const TableOne: React.FC = () => {
    const initialData: Data[] = [
        {
            'رقم اطلب': 1,
            'رقم المعلن': 123,
            'مسافة الطريق': '10km',
            'مبلغ الطلب': '1000',
            'رقم هاتف العميل': '0123456789',
            'اسم العميل': 'John Doe',
            'اسم السائق': 'Driver A',
            ' رقم السائق': '987654321',
            ' رقم مركبة السائق': 'ABC123',
            ' تاريخ نشر': '2024-06-01',
            'حالة الطلب': 'Pending',
        },
        {
            'رقم اطلب': 2,
            'رقم المعلن': 123,
            'مسافة الطريق': '10km',
            'مبلغ الطلب': '1000',
            'رقم هاتف العميل': '0123456789',
            'اسم العميل': 'John Doe',
            'اسم السائق': 'Driver A',
            ' رقم السائق': '987654321',
            ' رقم مركبة السائق': 'ABC123',
            ' تاريخ نشر': '2024-06-01',
            'حالة الطلب': 'Pending',
        },
        {
            'رقم اطلب': 3,
            'رقم المعلن': 123,
            'مسافة الطريق': '10km',
            'مبلغ الطلب': '1000',
            'رقم هاتف العميل': '0123456789',
            'اسم العميل': 'John Doe',
            'اسم السائق': 'Driver A',
            ' رقم السائق': '987654321',
            ' رقم مركبة السائق': 'ABC123',
            ' تاريخ نشر': '2024-06-01',
            'حالة الطلب': 'Pending',
        },
        {
            'رقم اطلب': 1,
            'رقم المعلن': 123,
            'مسافة الطريق': '10km',
            'مبلغ الطلب': '1000',
            'رقم هاتف العميل': '0123456789',
            'اسم العميل': 'John Doe',
            'اسم السائق': 'Driver A',
            ' رقم السائق': '987654321',
            ' رقم مركبة السائق': 'ABC123',
            ' تاريخ نشر': '2024-06-01',
            'حالة الطلب': 'Pending',
        },
        {
            'رقم اطلب': 4,
            'رقم المعلن': 123,
            'مسافة الطريق': '10km',
            'مبلغ الطلب': '1000',
            'رقم هاتف العميل': '0123456789',
            'اسم العميل': 'John Doe',
            'اسم السائق': 'Driver A',
            ' رقم السائق': '987654321',
            ' رقم مركبة السائق': 'ABC123',
            ' تاريخ نشر': '2024-06-01',
            'حالة الطلب': 'Pending',
        },
        {
            'رقم اطلب': 5,
            'رقم المعلن': 123,
            'مسافة الطريق': '10km',
            'مبلغ الطلب': '1000',
            'رقم هاتف العميل': '0123456789',
            'اسم العميل': 'John Doe',
            'اسم السائق': 'Driver A',
            ' رقم السائق': '987654321',
            ' رقم مركبة السائق': 'ABC123',
            ' تاريخ نشر': '2024-06-01',
            'حالة الطلب': 'Pending',
        },
        {
            'رقم اطلب': 6,
            'رقم المعلن': 123,
            'مسافة الطريق': '10km',
            'مبلغ الطلب': '1000',
            'رقم هاتف العميل': '0123456789',
            'اسم العميل': 'John Doe',
            'اسم السائق': 'Driver A',
            ' رقم السائق': '987654321',
            ' رقم مركبة السائق': 'ABC123',
            ' تاريخ نشر': '2024-06-01',
            'حالة الطلب': 'Pending',
        },
        // More data here...
    ];

    const columns: Column<Data>[] = React.useMemo(
        () => [
            { Header: 'رقم اطلب', accessor: 'رقم اطلب' },
            { Header: 'رقم المعلن', accessor: 'رقم المعلن' },
            { Header: 'مسافة الطريق', accessor: 'مسافة الطريق' },
            { Header: 'مبلغ الطلب', accessor: 'مبلغ الطلب' },
            { Header: 'رقم هاتف العميل', accessor: 'رقم هاتف العميل' },
            { Header: 'اسم العميل', accessor: 'اسم العميل' },
            { Header: 'اسم السائق', accessor: 'اسم السائق' },
            { Header: ' رقم السائق', accessor: ' رقم السائق' },
            { Header: ' رقم مركبة السائق', accessor: ' رقم مركبة السائق' },
            { Header: ' تاريخ نشر', accessor: ' تاريخ نشر' },
            { Header: 'حالة الطلب', accessor: 'حالة الطلب' },
            {
                Header: 'Actions',
                accessor: 'actions',
                Cell: ({ row }: { row: { original: Data } }) => (
                    <>
                        <button onClick={() => handleEdit(row.original)}>Edit</button>
                        <button onClick={() => handleDelete(row.original)}>Delete</button>
                    </>
                ),
            },
        ],
        [],
    );

    const [query, setQuery] = useState<string | number>(null);
    const [data, setData] = useState<Data[]>(initialData);
    const [editingRow, setEditingRow] = useState<Data | null>(null);
    const [formData, setFormData] = useState<Data | null>(null);

    const handleSearch = (searchQuery: string | number) => {
        setQuery(searchQuery);
    };

    const handleEdit = (rider: Data) => {
        setEditingRow(rider);
        setFormData(rider);
    };

    const handleDelete = (data: Data) => {
        setData((prevData) =>
            prevData.filter((r) => r['رقم اطلب'] !== data['رقم اطلب']),
        );
    };
    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData!,
            [name]: value,
        }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setData(prevData =>
            prevData.map(r => r['رقم اطلب'] === formData!['رقم اطلب'] ? formData! : r)
        );
        setEditingRow(null);
        setFormData(null);
    };

    const handleFormCancel = () => {
        setEditingRow(null);
        setFormData(null);
    };

    return (
        <div className="App">
            <h3 className="mb-2 font-bold text-2xl text-black dark:text-white">
                الطلبات
            </h3>
            <SearchBar onSearch={handleSearch} />
            {editingRow ? (
                <form onSubmit={handleFormSubmit} className="bg-white dark:bg-[#24303f] dark:text-white grid lg:grid-cols-3 grid-cols-2 gap-2 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    {
                        Object.keys(formData).map((key) => {
                            return (<div key={key} className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>{key}</label>
                                <input
                                    type="text"
                                    name={key}
                                    value={formData![key]}
                                    onChange={handleFormChange}
                                    className="shadow appearance-none dark:bg-[#313d4a] dark:text-[#7c8490] border-[#2e3a47] border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>)
                        })
                    }
                    <div className="flex justify-end gap-3 col-span-2 lg:col-span-3">
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
                        <button type="button" onClick={handleFormCancel} className="bg-blue-500 hover:bg-blue-700 text-white hover:bg-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
                    </div>
                </form>
            ) : (
                <Table columns={columns} data={data} globalFilter={query} />
            )}
        </div>
    );
};

export default TableOne;
