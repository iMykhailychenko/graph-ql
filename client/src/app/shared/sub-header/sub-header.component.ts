import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss'],
})
export class SubHeaderComponent {
  @Input() backUrl = '/';
  @Input() backTitle = 'Back';
  @Input() title = 'GraphQl Blog';

  constructor() {}
}
