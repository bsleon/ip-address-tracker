import React, { useState } from "react";
import SearchBar from "material-ui-search-bar";
import axios from "axios";

const IpTracker = ({setPosition}) => {
	const [value, setValue] = useState("");
	const [ipData, setIpData] = useState("");
	const apiKey = process.env.REACT_APP_IPIFY_API_KEY;
	const requestSearch = () => {
		console.log("Requesting: ", value);
		axios
			.get(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${value}`)
			.then((res) => {
				console.log(res.data);
                setIpData(res.data);
                setPosition([res.data.location.lat, res.data.location.lng])
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});
	};
	return (
		<React.Fragment>
			<SearchBar
				value={value}
				onChange={(newValue) => setValue(newValue)}
				onCancelSearch={() => setValue("")}
				onRequestSearch={requestSearch}
			/>
			<div>
				<p>{ipData?.ip}</p>
				<p>{ipData?.location?.city}</p>
				<p>{ipData?.location?.timezone}</p>
				<p>{ipData?.isp}</p>
			</div>
		</React.Fragment>
	);
};

export default IpTracker;
