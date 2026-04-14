import React from 'react';
import Newshero from './CONTACT/contacthero';
import Card from './CONTACT/card';
import Map from './CONTACT/map';

export default function Contact() {
	return (
		<div>
			<div className="font-Montserrat mt-32 lg:mt-0">
				<Newshero />
				<Card />
				<Map />
			</div>
		</div>
	);
}
