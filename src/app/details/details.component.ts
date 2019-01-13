import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Input() index:number;
  @Output() isIrrelevant = new EventEmitter<boolean>();

  quoteIrrelevant(irrelevant: boolean) {
    this.isIrrelevant.emit(irrelevant);
  }
  @Output() upvote = new EventEmitter();
  @Output() downvote = new EventEmitter();
  //
  // highestArr:any[]
  //   highestVotes() {
  //     this.highestArr = this.quotes.map(element => {
  //       return element.upvote;
  //     });
  //     let numHigh = Math.max(...this.highestArr);
  //     this.quotes.forEach(element => {
  //       if(element.upvote === numHigh) {
  //         element.highestVote = true;
  //       } else {
  //         element.highestVote = false;
  //       }
  //     });
  //
  //   }
  //
  //   downVote(i) {
  //     this.quotes[i].downvote++;
  //   }
  //   upVote(i) {
  //     this.quotes[i].upvote++;
  //     this.highestVotes();
  //
  //   }

  constructor() { }

  ngOnInit() {
  }

}
