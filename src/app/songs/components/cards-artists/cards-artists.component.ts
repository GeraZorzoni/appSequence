import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Artist } from '../../interfaces/artist.interface';

@Component({
  selector: 'song-cards-artists',
  templateUrl: './cards-artists.component.html',
  styles: ``,
})
export class CardsArtistsComponent implements OnInit {
  @Input()
  public artist!: Artist;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    if (!this.artist) throw Error('artist property is required');
  }
}
