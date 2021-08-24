import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Friend, FriendAction } from 'src/app/interfaces/common.interface';

@Component({
  selector: 'app-friend-card',
  templateUrl: './friend-card.component.html',
  styleUrls: ['./friend-card.component.scss']
})
export class FriendCardComponent implements OnInit {

  constructor() { }

  userIcon = { 'fill': 'red', 'height': '10px', 'width': '10px' };

  userWithCross = { 'height': '123.5', 'width': '149' };
  viewMoreLess = { 'fill': '#98a6ac', 'height': '1.6vw', 'width': '1.6vw', 'fill-opacity': '0.5' };
  summaryIcons = { 'fill': '#98a6ac', 'height': '1.8vw', 'width': '1.8vw', 'fill-opacity': '0.9' };
  summaryIconsAcive = { 'fill': '#98a6ac', 'height': '1.8vw', 'width': '1.8vw', 'fill-opacity': '0.9', 'stroke': '#00b19d' };
  summaryIconsInAcive = { 'fill': '#98a6ac', 'height': '1.8vw', 'width': '1.8vw', 'fill-opacity': '0.9', 'stroke': '#F76397' };
  iconStyleString = { 'background': 'transparent', 'margin-top': '8px', 'margin-left': '35px' };

  @Input() generalInfo: Friend;
  @Output() frndCardAction = new EventEmitter<FriendAction>();

  ngOnInit(): void {
  }

  frndAction(key: 'DELETE' | 'ADD' | 'FAV', id, val) {
    this.frndCardAction.emit({actionName: key, id, category: this.generalInfo.category ,favValue: val, name: this.generalInfo.name});
  }

}
