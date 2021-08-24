import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FriendsService } from 'src/app/Services/friends.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-friends-filter',
  templateUrl: './friends-filter.component.html',
  styleUrls: ['./friends-filter.component.scss']
})
export class FriendsFilterComponent implements OnInit {

  constructor(
    private friendsService: FriendsService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  public searchCtrl = new FormControl();
  public isFilterApplied = false;

  onSearchClick() {
    this.isFilterApplied = true;
    this.friendsService.applyFilter({ category: null, searchKeyword: this.searchCtrl.value });
    // this.searchCtrl.reset();
  }

  resetFilters() {
    this.isFilterApplied = false;
    this.friendsService.resetAllFilters();
    this.searchCtrl.reset();
  }
}
