import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import DefaultLayout from '../layout/DefaultLayout';
import { Rider } from '../types/RiderDetails';


const RiderDetails = () => {
    const { id } = useParams<{ id: string }>();

    // Fetch order

    const RiderDetails: Rider = {
        'اسم الكامل': 'ahmed',
        'الرصيد': 100,
        'رقم هاتف ': 2126778855,
        'نوع مركبة': "دراجة",
        'رقم المركبة': 1155,
        'المدينة ': 'agadir',
        'عدد الطلبات المسلمة': 12,
        ' تقيم': 6,
        status: true,
    };

    return (
        <DefaultLayout>
            <div className="mx-auto max-w-270">
                <Breadcrumb pageName="تفاصيل الطلب" />
                <div className="rounded-sm border px-5 py-8 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
                        {Object.keys(RiderDetails).map((rider: keyof Rider) => {
                            return (
                                <div
                                    key={rider}
                                    className='flex gap-1'
                                >
                                    {rider === "status" ? (
                                        <p>{RiderDetails[rider] ? "معتمد كسائق" : "غير معتمد كسائق "}</p>
                                    )
                                        : (<>
                                            <p>{rider}:</p>
                                            <p>{RiderDetails[rider]}</p>
                                        </>
                                        )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default RiderDetails;
