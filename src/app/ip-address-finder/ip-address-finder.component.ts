import { Component } from '@angular/core';
import IP from '../../assets/IP.json';

@Component({
  selector: 'app-ip-address-finder',
  templateUrl: './ip-address-finder.component.html',
  styleUrls: ['./ip-address-finder.component.css']
})
export class IpAddressFinderComponent {

	constructor() {
		console.log(IP);
	}


}
