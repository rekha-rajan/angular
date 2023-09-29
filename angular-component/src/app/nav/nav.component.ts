import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor() { }
  
  slogan: string = 'your one stop shop for everything.';
  source: string = "assets/shopping.jpg";

  getSlogan() {
    return 'This ia a new slogan for this web application';
  }
  sitename: string = 'eShopping';

  displayNotification: boolean = false;
  
  closeNotification(){
    this.displayNotification = true;
  }


}
