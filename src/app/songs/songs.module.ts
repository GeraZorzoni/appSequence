import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../app.module';

import { MaterialModule } from '../material/material.module';
import { SongsRoutingModule } from './songs-routing.module';

import { CardsArtistsComponent } from './components/cards-artists/cards-artists.component';
import { CardsCompaniesComponent } from './components/cards-companies/cards-companies.component';
import { CardsComponent } from './components/cards/cards.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageArtistComponent } from './pages/list-page-artist/list-page-artist.component';
import { ListPageCompaniesComponent } from './pages/list-page-companies/list-page-companies.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SongPageComponent } from './pages/song-page/song-page.component';

@NgModule({
  declarations: [
    CardsArtistsComponent,
    CardsCompaniesComponent,
    CardsComponent,
    LayoutPageComponent,
    ListPageArtistComponent,
    ListPageCompaniesComponent,
    ListPageComponent,
    NewPageComponent,
    SongPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SongsRoutingModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
})
export class SongsModule {}
