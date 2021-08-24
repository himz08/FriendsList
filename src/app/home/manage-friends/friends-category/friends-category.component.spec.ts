import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsCategoryComponent } from './friends-category.component';

describe('FriendsCategoryComponent', () => {
  let component: FriendsCategoryComponent;
  let fixture: ComponentFixture<FriendsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
