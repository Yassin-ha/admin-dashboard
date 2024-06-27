import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import DefaultLayout from '../layout/DefaultLayout';
import { Order } from '../types/orderDetails';
import MapTwo from '../components/Maps/MapTwo';
import { useState } from 'react';

const OrderDetails = () => {
    const { id } = useParams<{ id: string }>();

    const [Note, setNote] = useState<string>('');
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);

    // Fetch order



    const orderDetails: Order = {
        'رقم اطلب': id,
        'تاريخ الطلب': '2024-06-24',
        'نوع مركبة': 'سيارة',
        'اسم السائق': 'Driver A',
        ' رقم السائق': '987654321',
        ' رقم مركبة السائق': 'ABC123',
        'مكان النشاط': 'Marrackech',
        'اسم النشاط التحاري': 'Pizza',
        'رقم هاتف النشاط ': 1233232,
    };

    const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const files = Array.from(event.target.files);
            setSelectedImages(files);
            const filePreviews = files.map(file => URL.createObjectURL(file));
            setImagePreviews(filePreviews);
        }
    };

    const handleSave = () => {

        const formData = new FormData(); 
        formData.append('note', Note);

        selectedImages.forEach((file, index) => {
            formData.append(`images[${index}]`, file);
        });
        // Here you would typically make an API call to save the Note and
        // For demonstration, let's log it to console
    };


    return (
        <DefaultLayout>
            <div className="mx-auto ">
                <Breadcrumb pageName="تفاصيل الطلب" />
                <div className="rounded-sm border px-5 py-8 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 ">
                        {Object.keys(orderDetails).map((order: keyof Order) => {
                            return (
                                <div
                                    key={order}
                                    className='flex gap-1'
                                >
                                    <p>{order}:</p>
                                    <p>{orderDetails[order]}</p>
                                </div>
                            );
                        })}
                        <div className="grid col-span-1 md:col-span-2">
                            <label htmlFor="Note">ملاحظة:</label>
                            <textarea
                                id="Note"
                                value={Note}
                                placeholder='ملاحظة...'
                                onChange={handleNoteChange}
                                className="border bg-transparent mt-2 border-gray-300 px-2 py-1 rounded-md outline-none"
                                rows={6}
                            />
                            <button
                                onClick={handleSave}
                                className="bg-blue-500 w-fit text-white px-3 py-1 rounded-md mt-2"
                            >
                                حفظ
                            </button>
                        </div>
                        <div className='grid col-start-1 col-span-2'>
                            <input
                                id="image-upload"
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleImageChange}
                                className="border w-80 border-gray-300 px-2 py-1 rounded-md"
                            />
                            <div className="mt-2 grid  grid-cols-4 gap-2">
                                {imagePreviews.map((src, index) => (
                                    <div key={index} className="relative">
                                        <img
                                            src={src}
                                            alt={`preview ${index}`}
                                            className="w-full h-auto rounded-md"
                                        />
                                        <button
                                            onClick={() => {
                                                const newSelectedImages = selectedImages.filter((_, i) => i !== index);
                                                const newImagePreviews = imagePreviews.filter((_, i) => i !== index);
                                                setSelectedImages(newSelectedImages);
                                                setImagePreviews(newImagePreviews);
                                            }}
                                            className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                        >
                                            &times;
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <button
                                onClick={handleSave}
                                className="bg-blue-500 w-fit text-white px-3 py-1 rounded-md mt-2"
                            >
                                حفظ
                            </button>
                        </div>
                    </div>
                    <MapTwo />
                </div>
            </div>
        </DefaultLayout>
    );
};

export default OrderDetails;
