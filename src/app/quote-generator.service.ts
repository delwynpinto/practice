import { Injectable } from '@angular/core';
import quotes from '../assets/quotes.json';

@Injectable({
  providedIn: 'root'
})
export class QuoteGeneratorService {

	constructor() { }

	getQuote() {
		return(quotes[Math.floor( Math.random()*Math.floor(10) ) ]);
	}
}
