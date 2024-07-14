import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';

import { TranslateService } from '@ngx-translate/core';

import { SongsService } from '../../services/songs.service';
import { Artist } from '../../interfaces/artist.interface';

@Component({
  selector: 'list-page-artist',
  templateUrl: './list-page-artist.component.html',
  styles: ``,
})
export class ListPageArtistComponent implements OnInit {
  public artists: Artist[] = [];
  public isLoading: boolean = true;

  constructor(
    private songsService: SongsService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    this.loadArtists();
  }

  loadArtists(): void {
    this.isLoading = true;
    this.songsService
      .getArtist()
      .pipe(delay(1000))
      .subscribe((artists) => {
        this.artists = artists;
        this.isLoading = false;
      });
  }
}
