import { Component } from '@angular/core';
import { QuoteGeneratorService } from '../quote-generator.service';

@Component({
  selector: 'app-quote-generator',
  templateUrl: './quote-generator.component.html',
  styleUrls: ['./quote-generator.component.css']
})
export class QuoteGeneratorComponent {

	constructor(private quoteService: QuoteGeneratorService) {
		this.quoteService.getQuote();
	}

}
