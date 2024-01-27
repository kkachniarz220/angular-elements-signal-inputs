import {Component, input} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    test
    {{ value() }}
  `,
})
export class AppComponent {
  value = input<number>();
}
