import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lsn50v28Component } from './lsn50v28.component';

describe('Lsn50v28Component', () => {
  let component: Lsn50v28Component;
  let fixture: ComponentFixture<Lsn50v28Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lsn50v28Component]
    });
    fixture = TestBed.createComponent(Lsn50v28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
