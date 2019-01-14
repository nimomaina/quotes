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
  // @Output() upvote = new EventEmitter();
  // @Output() downvote = new EventEmitter();
  upVote = 0;
  downVote = 0;
   like(){
     this.upVote = this.upVote + 1;
   }
   dislike(){
     this.downVote = this.downVote + 1;
   }
  constructor() { }

  ngOnInit() {
  }

}
