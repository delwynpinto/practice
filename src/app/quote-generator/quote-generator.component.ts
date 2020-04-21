import { Component } from '@angular/core';
import { QuoteGeneratorService } from '../quote-generator.service';

@Component({
  selector: 'app-quote-generator',
  templateUrl: './quote-generator.component.html',
  styleUrls: ['./quote-generator.component.css']
})
export class QuoteGeneratorComponent {

	data;
	constructor(private quoteService: QuoteGeneratorService) {
		this.newQuote();
	}

	newQuote() {
		this.data  = this.quoteService.getQuote();
	}
}
