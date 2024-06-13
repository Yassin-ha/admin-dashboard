import React, { useState } from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import { Column } from 'react-table';

interface Data {
  'اسم النشاط': string;
  'رقم هاتف النشاط': number;
  ' العنوان': string;
  'عدد الطلبات التي تم تسليمها': number;
}

const TableOne: React.FC = () => {
  const initialData: Data[] = [
    {
      'اسم النشاط': 'pizza',
      'رقم هاتف النشاط': 2125445533,
      ' العنوان': 'agadir ...',
      'عدد الطلبات التي تم تسليمها': 25,
    },
    // More data here...
  ];

  const columns: Column<Data>[] = React.useMemo(
    () => [
      { Header: 'اسم النشاط', accessor: 'اسم النشاط' },
      { Header: 'رقم هاتف النشاط', accessor: 'رقم هاتف النشاط' },
      { Header: ' العنوان', accessor: ' العنوان' },
      {
        Header: 'عدد الطلبات التي تم تسليمها',
        accessor: 'عدد الطلبات التي تم تسليمها',
      },
    ],
    [],
  );

  const [query, setQuery] = useState<string>('');

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <div className="App">
      <h3 className="mb-2 font-bold text-2xl text-black dark:text-white">النشاط التجاري </h3>
      <SearchBar onSearch={handleSearch} />
      <Table columns={columns} data={initialData} globalFilter={query} />
    </div>
  );
};

export default TableOne;
