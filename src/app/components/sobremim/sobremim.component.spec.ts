import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobremimComponent } from './sobremim.component';

describe('SobreminComponent', () => {
  let component: SobremimComponent;
  let fixture: ComponentFixture<SobremimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobremimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobremimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
