import { Component } from '@angular/core';

import { Link } from './link/link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  links: Link[];

  constructor(){
    this.links = [

      new Link('Youtube', 'https://www.youtube.com/', 20),
      new Link('Whatsapp', 'https://web.whatsapp.com/', 200)
    ];

    console.log(this.links);

  }

  //añade tipo de datos
  addLink(title: HTMLInputElement, link: HTMLInputElement){
    this.links.push(new Link(title.value,link.value));
    
    link.value='';
    title.value='';
    /*
    console.log('enviando datos');
    console.log('values: ', title.value,link.value);
    */
    return false;
  }

}
