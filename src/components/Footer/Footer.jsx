import React from "react";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
    return(
        <div className="footer">
            <div className="contactContainer">
                <h3>Contact Info</h3>
                <ul className="footerList">
                    <li>
						<h4>Address:</h4> 
						<p> 30 Rue de Cessange </p>
						<p> Luxembourg </p>
                    </li>
                    <li>
						<h4>Email:</h4>
						<a href="mailto:warda@warda.com" className="footerEmail">warda@warda.com</a>
					</li>	
                    <li>
                        <h4>Phone:</h4>
						<p> +352691314178 </p>
				    </li>
                </ul>
            </div>
            <div className="socialMediaContainer">
                <h3>Social Media</h3>
                <img src={whatsapp} alt="wp" className="sMIcon"/>
                <img src={instagram} alt="insta" className="sMIcon"/>
            </div>
        </div>
    );
} 

export default Footer;