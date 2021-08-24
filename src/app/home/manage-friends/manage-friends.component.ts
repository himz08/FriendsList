import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FriendsService } from 'src/app/Services/friends.service';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Friend, FriendAction } from 'src/app/interfaces/common.interface';

@Component({
  selector: 'app-manage-friends',
  templateUrl: './manage-friends.component.html',
  styleUrls: ['./manage-friends.component.scss']
})
export class ManageFriendsComponent implements OnInit {

  constructor(private friendsService: FriendsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getFriendsObs();
  }
  public frndsDataObs;

  getFriendsObs() {
    this.frndsDataObs = this.friendsService.getFriendsDataObs().pipe(
      map(data => Object.keys(data).map(k => {
        return {
          category: k,
          friends: data[k]
        }
      })),
    );
  }

  openDialog(e: FriendAction) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      height: '150px',
      data: { name: e.name }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if (result) {
        this.friendsService.performAction(e);
      }
    });
  }

  action(e: FriendAction) {
    if (e.actionName === 'DELETE') {
      this.openDialog(e);
    } else {
      this.friendsService.performAction(e);
    }
  }
}
