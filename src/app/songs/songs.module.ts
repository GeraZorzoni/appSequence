import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { SongsRoutingModule } from './songs-routing.module';

import { CardsComponent } from './components/cards/cards.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SongPageComponent } from './pages/song-page/song-page.component';

@NgModule({
  declarations: [
    ListPageComponent,
    SongPageComponent,
    LayoutPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardsComponent,
  ],
  imports: [CommonModule, MaterialModule, SongsRoutingModule],
})
export class SongsModule {}
