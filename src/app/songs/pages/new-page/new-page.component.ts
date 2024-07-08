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
    { id: 1, desc: 'Pop' },
    { id: 1, desc: 'Alternative' },
    { id: 1, desc: 'Heavy' },
    { id: 1, desc: 'Chill' },
    { id: 1, desc: 'Blues' },
  ];
}
