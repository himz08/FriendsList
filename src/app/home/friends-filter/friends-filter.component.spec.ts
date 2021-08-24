import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsFilterComponent } from './friends-filter.component';

describe('FriendsFilterComponent', () => {
  let component: FriendsFilterComponent;
  let fixture: ComponentFixture<FriendsFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendsFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
