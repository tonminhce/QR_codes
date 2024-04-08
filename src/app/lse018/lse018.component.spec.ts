import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lse018Component } from './lse018.component';

describe('Lse018Component', () => {
  let component: Lse018Component;
  let fixture: ComponentFixture<Lse018Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lse018Component]
    });
    fixture = TestBed.createComponent(Lse018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
