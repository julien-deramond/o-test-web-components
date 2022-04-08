import { Component } from '@angular/core';
import '@orwc/component-a/dist/bundle.esm';
import '@orwc/component-b/dist/bundle.esm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'o-test-web-components';
}
