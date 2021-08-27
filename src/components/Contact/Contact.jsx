import React from "react";

const Contact = () => {
    return(
        <div className="contact">
            <h1 className="contactTitle">Contact</h1>
            <div className="contactContainer">

                <ul className="contactList">
                    <li>
						<h3>Address:</h3>
						<p> 30 Rue de Cessange </p>
						<p> Luxembourg </p>
                    </li>
                    <li>
						<h3>Email:</h3>
						<a href="mailto:warda@warda.com" className="emailContact">warda@warda.com</a>
					</li>	
                    <li>
                        <h3>Phone:</h3>
						<p> +352691314178 </p>
				    </li>
                </ul>
                
            </div>
        </div>
    );
} 

export default Contact;