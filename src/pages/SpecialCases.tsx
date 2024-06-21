import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import SpecialTable from '../components/Tables/SpecialTable';


import DefaultLayout from '../layout/DefaultLayout';


const SpecialCases = () => {
    return (
        <DefaultLayout>
            <Breadcrumb pageName="حالات خاصة" />

            <div className="flex flex-col gap-10">
                <SpecialTable />
            </div>
        </DefaultLayout>
    );
};

export default SpecialCases;
