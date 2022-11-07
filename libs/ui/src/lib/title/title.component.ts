import { Component, Input } from '@angular/core';

@Component({
  selector: 'anymarket-frontend-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass'],
})
export class TitleComponent {
  @Input() title!: string;
}
