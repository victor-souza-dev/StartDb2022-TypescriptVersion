import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinsComponent } from './wins.component';

describe('WinsComponent', () => {
  let component: WinsComponent;
  let fixture: ComponentFixture<WinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
