import React from "react";
import logo from './logo7.png';
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Stay Safe With</FooterLink>
			<FooterLink href="#">Route Master</FooterLink>
		
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#">Rent Vehicles</FooterLink>
			<FooterLink href="#">Vehicle Maintain</FooterLink>
			<FooterLink href="#">Promote Adds</FooterLink>
			
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">NO:56/111</FooterLink>
			<FooterLink href="#">Temple Road</FooterLink>
			<FooterLink href="#">Kandy</FooterLink>
			
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			
		</Column>
        <Column>
			<Heading>Route Master</Heading>
            <img src={logo} alt="My logo"  style={{ height: 60, width: 60, borderColor: 'gray', borderWidth: 2,  marginBottom: 10 , marginleft:10} }/>
			<FooterLink href="#">© 2021 OnAirCode. All Right Reserved</FooterLink>
		</Column>
		</Row>
	</Container>	
);
};
export default Footer;
