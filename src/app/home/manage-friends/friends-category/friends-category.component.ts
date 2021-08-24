import { Component, Input, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Friend, FriendAction } from 'src/app/interfaces/common.interface';

@Component({
  selector: 'app-friends-category',
  templateUrl: './friends-category.component.html',
  styleUrls: ['./friends-category.component.scss']
})
export class FriendsCategoryComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() friendInfo: { category: string, friends: Friend[] };
  @Output() action = new EventEmitter<FriendAction>();

  public name: string = '';
  private totalUsers: number;
  public initialCount = 4;
  public upperLimit = this.initialCount;


  ngOnInit(): void {

  }

  ngOnChanges() {
    this.totalUsers = this.friendInfo ? this.friendInfo.friends.length : 0;
    if (this.upperLimit >= this.totalUsers) {
      this.upperLimit = this.totalUsers;
    } else if (this.initialCount >= this.totalUsers) {
      this.upperLimit = this.totalUsers;
    } else {
      this.upperLimit = this.initialCount;
    }
  }

  changeUpperLimit(action: 'increase' | 'decrease') {
    const diff = this.totalUsers - this.upperLimit;
    if (action === 'increase') {
      if (diff >= this.initialCount) {
        this.upperLimit += 4;
      } else if (diff > 0) {
        this.upperLimit = this.totalUsers;
      }
    } else if (action === 'decrease') {
      console.log('here');
      if (this.initialCount >= this.totalUsers) {
        this.upperLimit = this.totalUsers;
      } else {
        this.upperLimit = this.initialCount;
      }
    }
  }

  cardAction(event) {
    console.log(event);
    this.action.emit(event);
  }

  trackByMethod(index: number, friend: Friend): any {
    return friend.id;
  }

  onAddFriend(e) {
    console.log('Clicked', e);
    if (this.name !== '') {
      let newFriend: Friend = {
        name: this.name,
        time: (new Date()).toString(),
        fav: true,
        id: new Date().toString(),
        category: this.friendInfo.category
      }
      this.action.emit({
        actionName: 'ADD',
        newFriendInfo: newFriend,
        id: newFriend.id,
        category: newFriend.category,
        name: newFriend.name,
      });
      this.name = '';
    }
  }

}
