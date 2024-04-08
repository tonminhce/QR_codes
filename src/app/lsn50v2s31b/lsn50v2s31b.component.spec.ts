import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lsn50v2s31bComponent } from './lsn50v2s31b.component';

describe('Lsn50v2s31bComponent', () => {
  let component: Lsn50v2s31bComponent;
  let fixture: ComponentFixture<Lsn50v2s31bComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lsn50v2s31bComponent]
    });
    fixture = TestBed.createComponent(Lsn50v2s31bComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
