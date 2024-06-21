import React, { useState } from "react";
import Map from "./Map"; 
import restaurantIcon from "../../images/icon/restaurant.png"
import ClientIcon from "../../images/icon/home.png"
import RiderPlace from "../../images/icon/delivery.png"




type LocationType = "restaurant" | "clientPlace" | "riderPlace";

interface Location {
    id: number;
    position: [number, number];
    type: LocationType;
    name: string;
}

const initialLocations: Location[] = [
    { id: 1, position: [31.6295, -7.9811], type: "restaurant", name: "restaurant 1" },
    { id: 2, position: [34.020882, -6.84165], type: "clientPlace", name: "client 1" },
    { id: 3, position: [33.5731, -7.5898], type: "riderPlace", name: "rider 1" },
];

const MapTwo: React.FC = () => {
    const [locations, setLocations] = useState<Location[]>(initialLocations);

    const iconUrls: Record<LocationType, string> = {
        restaurant: restaurantIcon,
        clientPlace: ClientIcon,
        riderPlace: RiderPlace
    };

    return (
        <div className=" rounded-sm border border-stroke bg-white pt-7.5 pb-5 px-4 mt-5 shadow-default dark:border-strokedark dark:bg-boxdark">
            <Map
                locations={locations}
                iconUrls={iconUrls}
                center={[31.7917, -7.0926]}
                zoom={6}
            />
        </div>
    );
};

export default MapTwo;