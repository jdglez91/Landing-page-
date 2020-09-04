import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div>
					<div className="row">
						<div className="col-3">
							<Card />
						</div>
						<div className="col-3">
							<Card />
						</div>
						<div className="col-3">
							<Card />
						</div>
						<div className="col-3">
							<Card />
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</div>
	);
}
