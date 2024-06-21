import React, { useState } from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import { Column } from 'react-table';
import { BsWallet2 } from "react-icons/bs";

interface Data {
  'اسم الكامل': string;
  'الرصيد': number;
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
      'الرصيد': 100,
      'رقم هاتف ': 2126778855,
      'نوع مركبة': "دراجة",
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
      { Header: 'الرصيد', accessor: 'الرصيد' },
      { Header: 'رقم هاتف ', accessor: 'رقم هاتف ' },
      { Header: 'نوع مركبة', accessor: 'نوع مركبة' },
      { Header: 'رقم المركبة', accessor: 'رقم المركبة' },
      { Header: 'المدينة ', accessor: 'المدينة ' },
      { Header: ' تقيم', accessor: ' تقيم' },
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
          <div className='flex flex-col justify-center items-center'>
            <div className='flex gap-2'>
            <button onClick={() => handleEdit(row.original)}>Edit</button>
            <button onClick={() => handleBalanceEdit(row.original)}><BsWallet2 /></button>
            </div>
            <button onClick={() => handleDelete(row.original)}>Delete</button>
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

  const handleToggleStatus = (rider: Data) => {
    setData((prevData) =>
      prevData.map((r) =>
        r['رقم اطلب'] === rider['رقم اطلب']
          ? {
            ...r,
            status: !r.status,
            'حالة الطلب': !r.status ? 'Accepted' : 'Rejected',
          }
          : r,
      ),
    );
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

  const handleBalanceEdit = (rider: Data) => {
    const newName = prompt("ادخل الرصيد الجديد", rider['الرصيد']);
    if (newName) {
      setData(prevData =>
        prevData.map(r => r['رقم اطلب'] === rider['رقم اطلب'] ? { ...r, 'الرصيد': newName } : r)
      );
    }
  };

  return (
    <div className="App">
      <h3 className="mb-2 font-bold text-2xl text-black dark:text-white">
        السائق{' '}
      </h3>
      <SearchBar onSearch={handleSearch} />
      {editingRow ? (
        <form onSubmit={handleFormSubmit} className="bg-white dark:text-white dark:bg-[#24303f] grid lg:grid-cols-3 grid-cols-2 gap-2 w-full shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {
            Object.keys(formData).map((key) => {
              return (<div key={key} className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={key}>{key}</label>
                {key === 'نوع مركبة' ? (
                  <select
                    name={key}
                    value={formData![key]}
                    onChange={handleFormChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-[#313d4a] dark:text-[#7c8490] border-[#2e3a47] leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="سيارة">سيارة</option>
                    <option value="دراجة">دراجة</option>
                    <option value="شاحنة">شاحنة</option>
                    <option value="باص">باص</option>
                  </select>
                ) : (
                  <input
                    type={key === 'الرصيد' || key === 'رقم هاتف ' || key === 'رقم المركبة' || key === 'عدد الطلبات المسلمة' || key === ' تقيم' ? 'number' : 'text'}
                    name={key}
                    value={formData![key]}
                    onChange={handleFormChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 dark:bg-[#313d4a] dark:text-[#7c8490] border-[#2e3a47] leading-tight focus:outline-none focus:shadow-outline"
                  />
                )}
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
