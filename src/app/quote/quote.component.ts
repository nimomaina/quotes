import { Component, OnInit} from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote ('Dirt biking is life','Osman Sabir','Hassan'),
    new Quote('No guts no story','Chris Brady','Chris Brady'),
    new Quote('Giving is receiving','Ali Omar','Omar'),
  ];

  userModel = new Quote('', '','');

  constructor() { }

  ngOnInit() {
  }

}
