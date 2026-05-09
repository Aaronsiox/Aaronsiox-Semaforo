import React from "react";
import { useState } from 'react';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const Home = () => {

	const [lightOn, setlightOn] = useState("");


	return (
		<div className="text-center">
            
			<div className="d-flex justify-content-center">
				<div
					className="bg-dark"
					style={{ width: "20px", height: "220px"}}
				></div>
   			 </div><div className="d-flex justify-content-center">
				<div
					className="bg-dark"
					style={{ width: "280px", height: "520px", borderRadius: "10px" }}
					
				>
					<div className="col">
						<div className="d-flex justify-content-center my-3">
      						<div
								className="bg-danger rounded-circle"
								style={{ width: "150px", height: "150px"}}
								id={lightOn == "red" ? "red" : "disable"}
								onClick={() => setlightOn("red")}
							></div>
   						 </div>
						 <div className="d-flex justify-content-center my-3">
      						<div
								className="bg-warning rounded-circle"
								style={{ width: "150px", height: "150px"}}
								id={lightOn == "yellow" ? "yellow" : "disable"}
								onClick={() => setlightOn("yellow")}
							></div>
   						 </div>
						 <div className="d-flex justify-content-center my-3">
      						<div
								className="bg-success rounded-circle"
								style={{ width: "150px", height: "150px"}}
								id={lightOn == "green" ? "green" : "disable"}
								onClick={() => setlightOn("green")}
							></div>
   						 </div>
					</div>
				</div>
   			 </div>

		</div>
	);
};

export default Home;