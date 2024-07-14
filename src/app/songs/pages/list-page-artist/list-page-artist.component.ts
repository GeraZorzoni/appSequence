import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artist.interface';
import { SongsService } from '../../services/songs.service';
import { delay } from 'rxjs';

@Component({
  selector: 'list-page-artist',
  templateUrl: './list-page-artist.component.html',
  styles: ``,
})
export class ListPageArtistComponent implements OnInit {
  public artists: Artist[] = [];
  public isLoading: boolean = true;

  constructor(private songsService: SongsService) {}

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
