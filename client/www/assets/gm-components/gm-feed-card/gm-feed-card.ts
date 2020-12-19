import { Component } from '@angular/core';

/**
 * Generated class for the GmFeedCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'gm-feed-card',
  templateUrl: 'gm-feed-card.html'
})
export class GmFeedCardComponent {

  text: string;

  constructor() {
    console.log('Hello GmFeedCardComponent Component');
    this.text = 'Hello World';
  }

}
