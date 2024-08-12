import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserSectionPage } from './user-section.page';

describe('UserSectionPage', () => {
  let component: UserSectionPage;
  let fixture: ComponentFixture<UserSectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
