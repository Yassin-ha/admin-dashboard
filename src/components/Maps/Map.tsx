import React, { useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

type LocationType = "car" | "bike" | "scooter" | "restaurant" | "client";

interface Location {
    id: number;
    position: [number, number];
    type: LocationType;
    name: string;
}

interface LocationMapProps {
    locations: Location[];
    iconUrls: Record<LocationType, string>;
    center: [number, number];
    zoom: number;
}

const Map: React.FC<LocationMapProps> = ({ locations, iconUrls, center, zoom }) => {
    const getLocationIcon = (type: LocationType) => {
        return useMemo(
            () =>
                new L.Icon({
                    iconUrl: iconUrls[type],
                    iconSize: [25, 25],
                }),
            [iconUrls, type]
        );
    };

    return (
        <MapContainer center={center} zoom={zoom} style={{ height: "500px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {locations.map((location) => (
                <Marker
                    key={location.id}
                    position={location.position}
                    icon={getLocationIcon(location.type)}
                >
                    <Popup>{location.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
