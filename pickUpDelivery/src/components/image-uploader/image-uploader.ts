import { Component } from '@angular/core';

/**
 * Generated class for the ImageUploaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'image-uploader',
  templateUrl: 'image-uploader.html'
})
export class ImageUploaderComponent {

  text: string;

  constructor() {
    console.log('Hello ImageUploaderComponent Component');
    this.text = 'Hello World';
  }

}
