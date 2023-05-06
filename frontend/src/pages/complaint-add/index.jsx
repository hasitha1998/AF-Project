import React from "react";
import ComplaintAdd from "./ComplaintAdd";

// ComplaintProvider
import { ComplaintProvider } from "../../contexts/ComplaintContext";

const index = () => {
	return (
		<>
			<ComplaintProvider>
				<ComplaintAdd />
			</ComplaintProvider>
		</>
	);
};

export default index;