import { Component } from '@angular/core';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``,
})
export class NewPageComponent {
  // Todo funcion de agregar genero
  public genres = [
    { id: 1, desc: 'Rock' },
    { id: 2, desc: 'Pop' },
    { id: 3, desc: 'Alternative' },
    { id: 4, desc: 'Heavy' },
    { id: 5, desc: 'Chill' },
    { id: 6, desc: 'Blues' },
  ];
}
