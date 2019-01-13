import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quote }from '../quote';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input()quote : Quote;
  @Output ()isIrrelevant = new EventEmitter<boolean>();

  quoteIrrelevant(irrelevant:boolean){
    this.isIrrelevant.emit(irrelevant);
  }

//   @Input() quotes;
// voteUp(id:number){
//   this.quotes[id].upVote()
//
// }
// voteDown(id:number){
//   this.quotes[id].downVote()
//
// }


  constructor() { }

  ngOnInit() {
  }

}
