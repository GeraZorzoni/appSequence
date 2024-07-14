import { Component } from '@angular/core';

//TODO This component is pending to be built because it needs to be integrated with a CRUD system linked to songs, artists, and record companies."

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``,
})
export class NewPageComponent {
  public genres = [
    { id: 1, desc: 'Rock' },
    { id: 2, desc: 'Pop' },
    { id: 3, desc: 'Alternative' },
    { id: 4, desc: 'Heavy' },
    { id: 5, desc: 'Chill' },
    { id: 6, desc: 'Blues' },
  ];
}
