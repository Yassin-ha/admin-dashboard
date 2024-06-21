import React, { useState } from "react";
import Map from "./Map";
import CarIcon from "../../images/icon/car.png"
import TruckIcon from "../../images/icon/cargo-truck.png"
import BikeIcon from "../../images/icon/motorcycle.png"

type LocationType = "car" | "bike" | "truck";

interface Location {
    id: number;
    position: [number, number];
    type: LocationType;
    name: string;
}

const initialLocations: Location[] = [
    { id: 1, position: [31.6295, -7.9811], type: "car", name: "Car 1" },
    { id: 2, position: [34.020882, -6.84165], type: "bike", name: "Bike 1" },
    { id: 3, position: [33.5731, -7.5898], type: "truck", name: "truck 1" },
];

const App: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>(initialLocations);

    const iconUrls: Record<LocationType, string> = {
        car: CarIcon,
        bike: BikeIcon,
        truck: TruckIcon,
    };

    return (
        <div className="w-full col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
            <Map
                locations={locations}
                iconUrls={iconUrls}
                center={[31.7917, -7.0926]}
                zoom={6}
            />
        </div>
    );
};

export default App;