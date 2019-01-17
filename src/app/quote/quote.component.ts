import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [

  new Quote ('Dirt biking is life','Osman Sabir','Hassan', new Date (2018,2,3)),
  new Quote('No guts, no story','Chris Brady','Chris Brady', new Date (2018,3,4)),
]
  toggleDetails(index){
    this.quotes[index].showDetails =!   this.quotes[index].showDetails;
  }

  irrelevantQuote(isIrrelevant,index){
    if (isIrrelevant){
      this.quotes.splice(index,1);
    }''
  }
  createNewQuote(quote){
    let quoteLength = this.quotes.length;

    quote.quotedDate = new Date(quote.quotedDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit() {
  }

}
