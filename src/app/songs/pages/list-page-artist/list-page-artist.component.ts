import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artist.interface';
import { SongsService } from '../../services/songs.service';

@Component({
  selector: 'list-page-artist',
  templateUrl: './list-page-artist.component.html',
  styles: ``,
})
export class ListPageArtistComponent implements OnInit {
  public artists: Artist[] = [];

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.songsService
      .getArtist()
      .subscribe((artists) => (this.artists = artists));
  }
}
