import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageArtistComponent } from './pages/list-page-artist/list-page-artist.component';
import { ListPageCompaniesComponent } from './pages/list-page-companies/list-page-companies.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SongPageComponent } from './pages/song-page/song-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      {
        path: 'new-song',
        component: NewPageComponent,
      },
      {
        path: 'artist',
        component: ListPageArtistComponent,
      },
      {
        path: 'companies',
        component: ListPageCompaniesComponent,
      },
      {
        path: 'edit/:id',
        component: NewPageComponent,
      },
      {
        path: 'list',
        component: ListPageComponent,
      },
      {
        path: ':id',
        component: SongPageComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsRoutingModule {}
