import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'polenmad-about-layout',
  templateUrl: './about-layout.component.html',
  styleUrls: ['./about-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
