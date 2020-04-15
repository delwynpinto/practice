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
	result = [];
	input = IP;
	columnsToDisplay = ['index','address', 'count'];
	constructor() {
		this.addressFinder(IP);
	}
	
	addressFinder(IP) {
		/*
		Splitting each element by the tab character
		Followed by splitting the 3rd element of the returned array by the new line character
		The first element in the returned array is the IP Address
		*/
		var addressObject = new Object();
		IP.forEach(el =>{		
			var ip = el.split('\t')[2].split('\n')[0];
			if(addressObject.hasOwnProperty(ip) ) {
				// If ip already added, increment the counter
				addressObject[ip]++;
			}
			else {
				addressObject[ip] = 1;
			}
		});

		for (var el in addressObject) {
		    this.result.push({'address':el, 'count':addressObject[el]});
		}

		this.result.sort(function(a, b) {
		    return a[1] - b[1];
		});
	}
}
