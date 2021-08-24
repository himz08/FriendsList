import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Filter, Friend, FriendAction, FriendsCategory } from '../interfaces/common.interface';
import { list as data } from '../home/data';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor() { 
    this.fetchFriendsData();
  }

  private friendsDataSubject: BehaviorSubject<FriendsCategory> = new BehaviorSubject({});
  public list: Friend[] = data;


  public cleanedFriendsData: FriendsCategory = {};
  public filteredFriendsData: FriendsCategory = {};
  private selectedFilters: Filter = {
    searchKeyword: null,
    category: null,
  }
  public rawFriendsData: Friend[] = [];

  /**
   * Fetch friends list from backend using API
   */
  fetchFriendsData() {
    setTimeout(() => {
      this.rawFriendsData = this.list.slice();
      this.cleanFriendsData();
      this.filteredFriendsData = {...this.cleanedFriendsData}
      if (this.selectedFilters.searchKeyword || this.selectedFilters.category ) {
        this.applyFilter(this.selectedFilters);
      }
      this.emitLatestFriendsData();
    }, 500)
  }

  /**
   * Clean the raw data according to the need of UI and DS required
   */
  cleanFriendsData() {
    this.rawFriendsData.forEach((frnd: Friend) => {
      let key: string = frnd['category'].toString();
      if (!this.cleanedFriendsData.hasOwnProperty(key)) {
        this.cleanedFriendsData[key] = [];
      }
      this.cleanedFriendsData[key].push(frnd);
    })
  }

  /**
   * @returns Friends data observable
   */
  getFriendsDataObs(): Observable<FriendsCategory> {
    return this.friendsDataSubject.asObservable();
  }

  /**
   * Perform diff actons on a friend like add, delete etc
   * @param e Action Detail
   */
  performAction(e: FriendAction) {
    console.log('Service', e);
    if (e.actionName === 'DELETE') {
      this.deleteFriend(e.id, e.category);
    } else if (e.actionName === 'ADD') {
      this.addNewFriend(e.newFriendInfo);
    } else if (e.actionName === 'FAV') {
      this.updateFavValue(e.id, e.category, e.favValue);
    }
  }

  private deleteFriend(id: string, category: string) {
    if (this.cleanedFriendsData[category]) {
      let ind = this.cleanedFriendsData[category].findIndex(el => el.id === id);
      if (ind > -1) {
        this.cleanedFriendsData[category].splice(ind, 1);
        this.emitLatestFriendsData();
      }
    }
  }

  private addNewFriend(info: Friend) {
    if (!this.cleanedFriendsData.hasOwnProperty(info.category)) {
      this.cleanedFriendsData[info.category] = [];
    }
      this.cleanedFriendsData[info.category].push(info);
      this.emitLatestFriendsData();
  }

  applyFilter(filters: Filter) {
    this.selectedFilters = filters;
    this.applyCategoryFilter(filters.category);
    if (filters.searchKeyword) {
      this.applySearchFilter(filters.searchKeyword);
    }
    this.emitLatestFriendsData();
  }

  private applyCategoryFilter(category: string) {
    if (category === 'ALL' || !category ) {
      this.filteredFriendsData = {...this.cleanedFriendsData}
    } else {
      if (this.cleanedFriendsData[category]) {
        this.filteredFriendsData = {category : this.cleanedFriendsData[category].slice()}
      }
    }
  }

  private applySearchFilter(searchKey: string) {
    for (const ctgry in this.filteredFriendsData) {
      this.filteredFriendsData[ctgry] = this.filteredFriendsData[ctgry].filter((frnd: Friend) => {
        return frnd.name.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase());
      })
    }
  }

  resetAllFilters() {
    this.filteredFriendsData = {...this.cleanedFriendsData};
    this.emitLatestFriendsData();
  }

  updateFavValue(id: string, category: string, newVal: boolean) {
    if (this.cleanedFriendsData[category]) {
      let ind = this.cleanedFriendsData[category].findIndex(el => el.id === id);
      if (ind > -1) {
        this.cleanedFriendsData[category][ind].fav = newVal;
        this.emitLatestFriendsData();
      }
    }  }

  emitLatestFriendsData() {
    this.friendsDataSubject.next(this.filteredFriendsData);
  }
}
