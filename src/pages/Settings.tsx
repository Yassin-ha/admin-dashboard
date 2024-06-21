import { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

const Settings = () => {
  const [facebookLink, setFacebookLink] = useState<string>('');
  const [whatsappLink, setWhatsappLink] = useState<string>('');
  const [commissionValue, setCommissionValue] = useState<number>(0);
  const [pricePerKm, setPricePerKm] = useState<number>(0);
  const [deductionPerOrder, setDeductionPerOrder] = useState<number>(0);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // form submission logic here

  };

  const handleCancel = () => {
    // Reset form fields to their initial values
    setFacebookLink('');
    setWhatsappLink('');
    setCommissionValue(0);
    setPricePerKm(0);
    setDeductionPerOrder(0);
  };

  return (
    <DefaultLayout>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="الاعدادات" />

        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-5 xl:col-span-4">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  الاعدادات
                </h3>
              </div>
              <div className="p-7">
                <form action="#" onSubmit={handleSubmit}>
                  <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="facebookUrl"
                      >
                        رابط فايسبوك
                      </label>
                      <div className="relative">
                        <input
                          className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                          type="text"
                          name="facebookUrl"
                          value={facebookLink}
                          onChange={(e) => setFacebookLink(e.target.value)}
                          id="facebookUrl"
                          placeholder="رابط فايسبوك"
                        />
                      </div>
                    </div>

                    <div className="w-full sm:w-1/2">
                      <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="whatsAppUrl"
                      >
                        رابط واتساب
                      </label>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="whatsAppUrl"
                        value={whatsappLink}
                        onChange={(e) => setWhatsappLink(e.target.value)}
                        id="whatsAppUrl"
                        placeholder="رابط واتساب"
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="CommissionValue"
                    >
                      قيمة العمولة
                    </label>
                    <div className="relative">
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="CommissionValue"
                        id="CommissionValue"
                        placeholder="قيمة العمولة"
                        value={commissionValue}
                        onChange={(e) => setCommissionValue(Number(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="priceParKiloMetre"
                    >
                      سعر الكيلو متر
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="priceParKiloMetre"
                      id="priceParKiloMetre"
                      placeholder="سعر الكيلو متر"
                      value={pricePerKm}
                      onChange={(e) => setPricePerKm(Number(e.target.value))}
                    />
                  </div>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Deductions"
                    >
                      قيمة الاقتطاع على كل طلب
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="text"
                      name="Deductions"
                      id="Deductions"
                      placeholder="قيمة الاقتطاع على كل طلب"
                      value={deductionPerOrder}
                      onChange={(e) => setDeductionPerOrder(Number(e.target.value))}
                    />
                  </div>

                  <div className="flex justify-end gap-4.5">
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      type="button" onClick={handleCancel}
                    >
                      إلغاء
                    </button>
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                      type="submit"
                    >
                      حفظ
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Settings;
