import { useParams } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';

import DefaultLayout from '../layout/DefaultLayout';
import MapTwo from '../components/Maps/MapTwo';
import { CanceledOrder } from '../types/orderDetails';

const CanceledOrderDetails = () => {
    const { id } = useParams<{ id: string }>();

    // Fetch order

    const orderDetails: CanceledOrder = {
        'رقم اطلب': id,
        'تاريخ الطلب': '2024-06-24',
        'نوع مركبة': 'سيارة',
        'اسم السائق': 'Driver A',
        ' رقم السائق': '987654321',
        ' رقم مركبة السائق': 'ABC123',
        'مكان النشاط': 'Marrackech',
        'اسم النشاط التحاري': 'Pizza',
        'رقم هاتف النشاط ': 1233232,
        'سبب الالغاء طلب':
            'يتم إلغاء الطلبات لأسباب متنوعة منها نفاد المخزون أو التأخير غير المتوقع في الشحن، بالإضافة إلى الأخطاء في الطلبات مثل اختيار منتج أو حجم أو لون غير صحيح. كما يمكن أن تكون هناك مشاكل مالية تتعلق بالدفع مثل رفض البطاقة الائتمانية أو نقص في الرصيد. أحياناً، يطلب العميل تغيير أو تعديل الطلب بعد تقديمه، أو يُكتشف أن الطلب مكرر. بالإضافة إلى ذلك، قد يحدث الإلغاء بسبب عدم استجابة العميل لطلبات تأكيد أو معلومات إضافية، أو لأسباب شخصية تتعلق بتغيير رأي العميل أو عدم رغبته في المنتج. وأخيراً، قد تكون هناك مشاكل فنية في النظام تمنع تنفيذ الطلب.',
    };

    return (
        <DefaultLayout>
            <div className="mx-auto max-w-270">
                <Breadcrumb pageName="تفاصيل الطلب" />
                <div className="rounded-sm border px-5 py-8 border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 ">
                        {Object.keys(orderDetails).map((order: keyof ORDER) => {
                            return (
                                <div
                                    key={order}
                                    className={`${order === 'سبب الالغاء طلب' ? 'grid col-span-2' : 'flex'
                                        }  gap-1`}
                                >
                                    <p>{order}:</p>
                                    <p>{orderDetails[order]}</p>
                                </div>
                            );
                        })}
                    </div>
                    <MapTwo />
                </div>
            </div>
        </DefaultLayout>
    );
};

export default CanceledOrderDetails;
