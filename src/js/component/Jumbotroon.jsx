// Importar el componente de react
import React from "react";

//crear el componente
const Jumbotroon = () => {
	return ( <div className="jumbotron secondary">
    <h1 className="display-4 text-left">Hello, world!</h1>
    <p className="lead text-left">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr className="my-4 text-left"/>
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </div>
  
		
	);
};


// Exportar el componente
export default Jumbotroon;