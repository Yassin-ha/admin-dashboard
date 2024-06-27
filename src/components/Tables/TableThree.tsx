import React, { useState } from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import { Column } from 'react-table';
import { Link } from 'react-router-dom';

interface Data {
  "رقم النشاط": string;
  'اسم النشاط': string;
  'رقم هاتف النشاط': number;
  ' العنوان': string;
  'عدد الطلبات التي تم تسليمها': number;
  status: boolean;
}

const TableOne: React.FC = () => {
  const initialData: Data[] = [
    {
      "رقم النشاط": "11",
      'اسم النشاط': 'pizza',
      'رقم هاتف النشاط': 2125445533,
      ' العنوان': 'agadir ...',
      'عدد الطلبات التي تم تسليمها': 25,
      status: false,
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
      {
        Header: 'Accept/Reject',
        accessor: 'status',
        Cell: ({ row }: { row: { original: Data } }) => (
          <input
            className=" cursor-pointer w-3 h-3"
            type="checkbox"
            checked={row.original.status}
            onChange={() => handleToggleStatus(row.original)}
          />
        ),
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }: { row: { original: Data } }) => (
            <div className='flex flex-col justify-center gap-1 items-center'>
              <div className='flex gap-2'>
                <button onClick={() => handleEdit(row.original)}>Edit</button>
                <button onClick={() => handleDelete(row.original)}>Delete</button>
              </div>
                <Link className=' dark:bg-white bg-boxdark text-white dark:text-black py-[2px] px-1 rounded-md' to={`/CommercialActivityDetails/${row.original["رقم النشاط"]}`}>
                عرض المزيد
              </Link>
            </div>

        ),
    },
    ],
    [],
  );

  const [query, setQuery] = useState<string>('');
  const [data, setData] = useState<Data[]>(initialData);
  const [editingRow, setEditingRow] = useState<Data | null>(null);
  const [formData, setFormData] = useState<Data | null>(null);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  const handleToggleStatus = (commercial: Data) => {
    setData((prevData) =>
      prevData.map((r) =>
        r["رقم النشاط"] === commercial["رقم النشاط"]
          ? {
            ...r,
            status: !r.status,
            'حالة الطلب': !r.status ? 'Accepted' : 'Rejected',
          }
          : r,
      ),
    );
  };
  const handleEdit = (commercial: Data) => {
    setEditingRow(commercial);
    setFormData(commercial);
  };

  const handleDelete = (data: Data) => {
    setData((prevData) =>
      prevData.filter((r) => r["رقم النشاط"] !== data["رقم النشاط"]),
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
      prevData.map(r => r["رقم النشاط"] === formData!["رقم النشاط"] ? formData! : r)
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
      <h3 className="mb-2 font-bold text-2xl text-black dark:text-white">النشاط التجاري </h3>
      <SearchBar onSearch={handleSearch} />
      {editingRow ? (
        <form onSubmit={handleFormSubmit} className="bg-white dark:text-white dark:bg-[#24303f] grid lg:grid-cols-3 grid-cols-2 gap-2 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {
            Object.keys(formData).map((key) => {
              return (<div key={key} className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>{key}</label>
                <input
                  type="text"
                  name={key}
                  value={formData![key]}
                  onChange={handleFormChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-[#313d4a] dark:text-[#7c8490] border-[#2e3a47] leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>)
            })
          }
          <div className="flex justify-end gap-3 col-span-2 lg:col-span-3">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Save</button>
            <button type="button" onClick={handleFormCancel} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cancel</button>
          </div>
        </form>
      ) : (
        <Table columns={columns} data={data} globalFilter={query} />
      )}
    </div>
  );
};

export default TableOne;
