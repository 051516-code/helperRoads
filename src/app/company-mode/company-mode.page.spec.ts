import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompanyModePage } from './company-mode.page';

describe('CompanyModePage', () => {
  let component: CompanyModePage;
  let fixture: ComponentFixture<CompanyModePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
