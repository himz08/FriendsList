import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FriendCardComponent } from './cards/friend-card/friend-card.component';
import { ManageFriendsComponent } from './home/manage-friends/manage-friends.component';
import { FriendsFilterComponent } from './home/friends-filter/friends-filter.component';
import { FriendsCategoryComponent } from './home/manage-friends/friends-category/friends-category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { SortPipe } from './pipes/sort.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TruncatePipe } from './pipes/truncate.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmDialogComponent } from './home/confirm-dialog/confirm-dialog.component';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FriendCardComponent,
    SortPipe,
    TruncatePipe,
    ManageFriendsComponent,
    FriendsFilterComponent,
    FriendsCategoryComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
