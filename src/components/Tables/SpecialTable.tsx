import React, { useState } from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import { Column } from 'react-table';
import { Link } from 'react-router-dom';

interface Data {
    'رقم اطلب': string;
    'اسم السائق': string;
    ' رقم السائق': string;
    ' رقم مركبة السائق': string;
    "اسم النشاط التحاري": string;
    "رقم هاتف النشاط ": number;

}

const TableOne: React.FC = () => {
    const initialData: Data[] = [
        {
            'رقم اطلب': "1",
            'اسم السائق': 'Driver A',
            ' رقم السائق': '987654321',
            ' رقم مركبة السائق': 'ABC123',
            'اسم النشاط التحاري': "pizza",
            'رقم هاتف النشاط ': 1233232

        },
        {
            'رقم اطلب': "2",
            'اسم السائق': 'Driver b',
            ' رقم السائق': '12233222',
            ' رقم مركبة السائق': 'jkm123',
            'اسم النشاط التحاري': "Tacos",
            'رقم هاتف النشاط ': 15452544

        },

    ];

    const columns: Column<Data>[] = React.useMemo(
        () => [
            { Header: 'رقم اطلب', accessor: 'رقم اطلب' },
            { Header: 'اسم السائق', accessor: 'اسم السائق' },
            { Header: ' رقم السائق', accessor: ' رقم السائق' },
            { Header: ' رقم مركبة السائق', accessor: ' رقم مركبة السائق' },
            { Header: 'اسم النشاط التحاري', accessor: 'اسم النشاط التحاري' },
            { Header: 'رقم هاتف النشاط ', accessor: 'رقم هاتف النشاط ' },
            {
                Header: 'Actions',
                accessor: 'actions',
                Cell: ({ row }) => (
                    <Link className=' dark:bg-white bg-boxdark text-white dark:text-black py-2 px-1 rounded-md' to={`/CanceledOrder/${row.original['رقم اطلب']}`}>
                        عرض المزيد
                    </Link>
                ),
            },
        ],
            [],
    );

    const [query, setQuery] = useState<string>('');
    const [data, setData] = useState<Data[]>(initialData);


    const handleSearch = (searchQuery: string) => {
        setQuery(searchQuery);
    };


    return (
        <div className="App">
            <h3 className="mb-2 font-bold text-2xl text-black dark:text-white">
            طلبات تم الغاءها
            </h3>
            <SearchBar onSearch={handleSearch} />
            <Table columns={columns} data={data} globalFilter={query} />
        </div>
    );
};

export default TableOne;
