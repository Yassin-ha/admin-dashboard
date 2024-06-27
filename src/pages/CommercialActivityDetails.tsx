import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import DefaultLayout from '../layout/DefaultLayout';
import { CommercialDetails } from '../types/CommercialActivity';

const OrderDetails = () => {
    const { id } = useParams<{ id: string }>();

    // Fetch order

    const commercialDetails: CommercialDetails = {
        "رقم النشاط": id,
        'اسم النشاط': 'pizza',
        'رقم هاتف النشاط': 2125445533,
        ' العنوان': 'agadir ...',
        'عدد الطلبات التي تم تسليمها': 25,
        status: false,
    };

    return (
        <DefaultLayout>
            <div className="mx-auto max-w-270">
                <Breadcrumb pageName="تفاصيل الطلب" />
                <div className="rounded-sm border px-5 py-8 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
                        {Object.keys(commercialDetails).map((commercial: keyof CommercialDetails) => {
                            return (
                                <div
                                    key={commercial}
                                    className='flex gap-1'
                                >
                                    {commercial === "status" ? (
                                        <p>{commercialDetails[commercial] ? "نشاط تجاري معتمد" : "نشاط تجاري غير معتمد"}</p>
                                    )
                                        : (<>
                                            <p>{commercial}:</p>
                                            <p>{commercialDetails[commercial]}</p>
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

export default OrderDetails;
