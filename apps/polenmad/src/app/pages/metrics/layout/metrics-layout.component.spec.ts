import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsLayoutComponent } from './metrics-layout.component';

describe('MetricsLayoutComponent', () => {
  let component: MetricsLayoutComponent;
  let fixture: ComponentFixture<MetricsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetricsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
