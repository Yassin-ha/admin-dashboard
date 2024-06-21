import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChartOne from '../../components/Charts/ChartOne';
import ChartThree from '../../components/Charts/ChartThree';
import ChartTwo from '../../components/Charts/ChartTwo';
import MapOne from "../../components/Maps/MapOne"
import TableOne from '../../components/Tables/TableOne';
import DefaultLayout from '../../layout/DefaultLayout';


const ECommerce: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-5 2xl:gap-7.5">
        <CardDataStats title="طلب" total="56" rate="0.43%" levelUp>
          <h3>عدد الطلبات </h3>
        </CardDataStats>
        <CardDataStats title="سائق" total="20" rate="4.35%" levelUp>
          <h3>عدد السائقين</h3>
        </CardDataStats>
        <CardDataStats title="نشاطا تجاريا" total="66" rate="2.59%" levelUp>
          <h3>عدد النشاطات التجارية</h3>
        </CardDataStats>
        <CardDataStats title="طلبا مسلما" total="20" rate="0.95%" levelDown>
          <h3>الطلبات المسلمة</h3>
        </CardDataStats>
        <CardDataStats title="⁠طلبا ملغيا" total="4" rate="0.95%" levelDown>
          <h3>⁠الطلبات الملغية</h3>
        </CardDataStats>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <ChartTwo />
        <ChartThree />
        <MapOne />
        <div className="col-span-12">
          <TableOne />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ECommerce;
