import IP from '../../assets/IP.json';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ip-address-finder',
  templateUrl: './ip-address-finder.component.html',
  styleUrls: ['./ip-address-finder.component.css']
})
export class IpAddressFinderComponent {

	/*
	result : Object containing the final result in the format expected with
		key : IP Adsress
		value : count of the times IP appears in input			
	*/
	toggleInput = false;
	result = new Object();
	input = IP;
	constructor() {
		this.addressFinder(IP);
	}

	
	addressFinder(IP) {
		/*
		Splitting each element by the tab character
		Followed by splitting the 3rd element of the returned array by the new line character
		The first element in the returned array is the IP Address
		*/
		IP.forEach(el =>{			
			var ip = el.split('\t')[2].split('\n')[0];
			if(this.result.hasOwnProperty(ip) ) {
				// If ip already added, increment the counter
				this.result[ip]++;
			}
			else {
				this.result[ip] = 1;
			}
		});
	}

	inputToggle() {
		this.toggleInput ? this.toggleInput = false : this.toggleInput = true;
	}

}
