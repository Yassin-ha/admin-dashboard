import React, { useState } from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import { Column } from 'react-table';

interface Data {
  'اسم الكامل': string;
  'رقم هاتف ': number;
  'نوع مركبة': string;
  'رقم المركبة': number;
  'المدينة ': string;
  'عدد الطلبات المسلمة': number;
  ' تقيم': number;
  status: boolean;
}

const TableOne: React.FC = () => {
  const initialData: Data[] = [
    {
      'اسم الكامل': 'ahmed',
      'رقم هاتف ': 2126778855,
      'نوع مركبة': 'bike',
      'رقم المركبة': 1155,
      'المدينة ': 'agadir',
      'عدد الطلبات المسلمة': 12,
      ' تقيم': 6,
      status: false,
    },
    // More data here...
  ];

  const columns: Column<Data>[] = React.useMemo(
    () => [
      { Header: 'اسم الكامل', accessor: 'اسم الكامل' },
      { Header: 'رقم هاتف ', accessor: 'رقم هاتف ' },
      { Header: 'نوع مركبة', accessor: 'نوع مركبة' },
      { Header: 'رقم المركبة', accessor: 'رقم المركبة' },
      { Header: 'المدينة ', accessor: 'المدينة ' },
      { Header: ' تقيم', accessor: ' تقيم' },
      {
        Header: 'Accept/Reject',
        accessor: 'status',
        Cell: ({ row }: { row: { original: Rider } }) => (
          <button onClick={() => handleToggleStatus(row.original)}>
            {row.original.status ? 'Accepted' : 'pending'}
          </button>
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

  const handleToggleStatus = (rider: Data) => {
    setData(prevData =>
      prevData.map(r => r['رقم اطلب'] === rider['رقم اطلب']
        ? {
            ...r,
            status: true,
            'حالة الطلب': 'Accepted'
          }
        : r)
    );
  };

  return (
    <div className="App">
      <h3 className="mb-2 font-bold text-2xl text-black dark:text-white">السائق </h3>
      <SearchBar onSearch={handleSearch} />
      <Table columns={columns} data={data} globalFilter={query} />
    </div>
  );
};

export default TableOne;
