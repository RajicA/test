import { Component, Input } from '@angular/core';

@Component({
  selector: 'test-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  @Input() isOverlay = true;
}
