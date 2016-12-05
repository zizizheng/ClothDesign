/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ShowClothComponent } from './show-cloth.component';

describe('ShowClothComponent', () => {
  let component: ShowClothComponent;
  let fixture: ComponentFixture<ShowClothComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowClothComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowClothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
