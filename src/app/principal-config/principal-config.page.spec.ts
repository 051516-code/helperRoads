import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincipalConfigPage } from './principal-config.page';

describe('PrincipalConfigPage', () => {
  let component: PrincipalConfigPage;
  let fixture: ComponentFixture<PrincipalConfigPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalConfigPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
