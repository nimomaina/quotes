import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote ('Dirt biking is life','Osman Sabir','Hassan', new Date (2018,2,3), 0,0),
    new Quote('No guts no story','Chris Brady','Chris Brady', new Date (2018,3,4), 0,0),
    new Quote('Giving is receiving','Ali Omar','Omar', new Date (2018,5,8), 0,0),
  ]
  toggleDetails(index){
    this.quotes[index].showDetails =!   this.quotes[index].showDetails;
  }

  irrelevantQuote(isIrrelevant,index){
    if (isIrrelevant){
      this.quotes.splice(index,1);
    }
  }
  createNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quote.length+1;
    quote.quotedDate = new Date(quote.quotedDate)
    this.quotes.push(quote)
  }




  highestArr:any[]
    highestVotes() {
      this.highestArr = this.quotes.map(element => {
        return element.upvote;
      });
      let numHigh = Math.max(...this.highestArr);
      this.quotes.forEach(element => {
        if(element.upvote === numHigh) {
          element.highestVote = true;
        } else {
          element.highestVote = false;
        }
      });

    }

    downVote(i) {
      this.quotes[i].downvote++;
    }
    upVote(i) {
      this.quotes[i].upvote++;
      this.highestVotes();

    }

  constructor() { }

  ngOnInit() {
  }

}
