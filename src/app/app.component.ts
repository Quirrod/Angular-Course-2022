import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular2022';
  onSubmit(form: any) {
    console.log('FORM: ', form);
  }
}
