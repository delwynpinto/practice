import { Component } from '@angular/core';
import IP from '../../assets/IP.json';

@Component({
  selector: 'app-ip-address-finder',
  templateUrl: './ip-address-finder.component.html',
  styleUrls: ['./ip-address-finder.component.css']
})
export class IpAddressFinderComponent {

	ipAddresses = [];
	result = new Object();
	constructor() {
		this.addressFinder(IP);
	}

	/*
		Splitting each element by the tab character
		Followed by splitting the 3rd element of the returned array by the new line character
		The first element in the returned array is the IP Address
	*/
	addressFinder(IP) {

		IP.forEach(el =>{
			this.ipAddresses.push( el.split('\t')[2].split('\n')[0] );
		});
		console.log(this.ipAddresses);

		this.ipAddresses.forEach(el =>{
			if(this.result.hasOwnProperty(el)) {
				this.result[el]++;
			}
			else {
				this.result[el] = 1;
			}
		});
		console.log(this.result);
	}

}
