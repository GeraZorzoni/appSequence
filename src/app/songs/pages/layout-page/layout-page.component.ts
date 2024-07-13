import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'Canciones', icon: 'label', url: './list' },
    { label: 'Artistas', icon: 'label', url: './artist' },
    { label: 'Compañias Discograficas', icon: 'label', url: './companies' },
    { label: 'Añadir Cancion', icon: 'add', url: './new-song' },
  ];
}
