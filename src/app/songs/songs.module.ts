import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { SongsRoutingModule } from './songs-routing.module';

import { CardsComponent } from './components/cards/cards.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageArtistComponent } from './pages/list-page-artist/list-page-artist.component';
import { ListPageCompaniesComponent } from './pages/list-page-companies/list-page-companies.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SongPageComponent } from './pages/song-page/song-page.component';

@NgModule({
  declarations: [
    CardsComponent,
    LayoutPageComponent,
    ListPageArtistComponent,
    ListPageCompaniesComponent,
    ListPageComponent,
    NewPageComponent,
    SongPageComponent,
  ],
  imports: [CommonModule, MaterialModule, SongsRoutingModule],
})
export class SongsModule {}
