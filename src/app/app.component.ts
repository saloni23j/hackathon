import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // loading$ = this.loader.loading$;
  // public constructor( public loader : LoadingService){}
   
  // }
  isLoggedIn: boolean = true;
  title = 'hackathon-frontend';
  // getLoading() {
  //   return this.loading$;
  // }
}
