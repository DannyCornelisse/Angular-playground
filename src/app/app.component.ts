import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: Array<String> = ['app works!'];
  testy: String = 'blbalblablbala';
  bla: String = '';

  constructor() {
      this.bla = 'bla';
  }
}
