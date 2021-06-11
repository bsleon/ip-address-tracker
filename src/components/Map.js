import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import React from "react";

const Map = ({ position }) => {
	const ChangeView = () => {
		const map = useMap();
		map.setView(position, 13);
		return null;
	};
	return (
		<React.Fragment>
			<MapContainer
				center={position}
				zoom={13}
				scrollWheelZoom={true}
			>
				<ChangeView />
				<TileLayer
					attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={position}>
					<Popup>
						A pretty CSS3 popup. <br /> Easily customizable.
					</Popup>
				</Marker>
			</MapContainer>
		</React.Fragment>
	);
};

export default Map;
