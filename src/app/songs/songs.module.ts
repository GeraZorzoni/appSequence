import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SongsRoutingModule } from './songs-routing.module';

import { ListPageComponent } from './pages/list-page/list-page.component';

@NgModule({
  declarations: [ListPageComponent],
  imports: [CommonModule, SongsRoutingModule],
})
export class SongsModule {}
