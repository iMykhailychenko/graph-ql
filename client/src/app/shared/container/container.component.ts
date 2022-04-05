import { Component, Input } from '@angular/core';
import { ContainerSize } from './container.interface';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent {
  @Input() size: ContainerSize = 'md';
  constructor() {}
}
