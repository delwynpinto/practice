import { Component } from '@angular/core';
import IP from '../../assets/IP.json';

@Component({
  selector: 'app-ip-address-finder',
  templateUrl: './ip-address-finder.component.html',
  styleUrls: ['./ip-address-finder.component.css']
})
export class IpAddressFinderComponent {

	constructor() {
		this.addressFinder(IP);
	}

	/*
		Splitting each element by the tab character
		Followed by splitting the 3rd element of the returned array by the new line character
		The first element in the returned array is the IP Address
	*/
	addressFinder(IP) {
		var ipAddresses = [];
		IP.forEach(el =>{
			ipAddresses.push( el.split('\t')[2].split('\n')[0] );
		});
		console.log(ipAddresses);
	}

}
