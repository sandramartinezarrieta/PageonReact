import React from "react";


// IMPORTAR LOS COMPONENTES
import Navbar from "./Navbar.jsx";
import Jumbotroon from "./Jumbotroon.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";




//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotroon />
			<br />
			<br />
			<Card />
			<Footer />
		</div>
	);
};

export default Home;
