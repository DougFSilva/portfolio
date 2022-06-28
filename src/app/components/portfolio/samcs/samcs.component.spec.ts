import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamcsComponent } from './samcs.component';

describe('SamcsComponent', () => {
  let component: SamcsComponent;
  let fixture: ComponentFixture<SamcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamcsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
