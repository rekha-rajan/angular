import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {id:1, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available:'Available', image: '/assets/jeans3.jpg'},
    {id:1, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available:'Not Available', image: '/assets/jeans3.jpg'}

  ];

}
