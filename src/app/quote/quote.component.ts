import { Component, OnInit} from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote ('Dirt biking is life','Osman Sabir','Hassan', new Date (2019,2,3)),
    new Quote('No guts no story','Chris Brady','Chris Brady', new Date (2019,3,4)),
    new Quote('Giving is receiving','Ali Omar','Omar', new Date (2019,5,8)),
  ]
  toggleDetails(index){
    this.quotes[index].showDetails =!   this.quotes[index].showDetails;
  }

  irrelevantQuote(isIrrelevant,index){
    if (isIrrelevant){
      this.quotes.splice(index,1);
    }
  }

  userModel = new Quote('', '','',new Date);

  constructor() { }

  ngOnInit() {
  }

}
