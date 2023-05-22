import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretWordComponent } from './secret-word.component';

describe('SecretWordComponent', () => {
  let component: SecretWordComponent;
  let fixture: ComponentFixture<SecretWordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretWordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecretWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
