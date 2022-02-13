import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'polenmad-metrics-layout',
  templateUrl: './metrics-layout.component.html',
  styleUrls: ['./metrics-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricsLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
