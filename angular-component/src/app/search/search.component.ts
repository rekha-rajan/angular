import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  serachValue: string = '';

  changeSearchValue(eventData: Event) {
    console.log((<HTMLInputElement> eventData.target).value);
    this.serachValue = (<HTMLInputElement> eventData.target).value;
  }

}

