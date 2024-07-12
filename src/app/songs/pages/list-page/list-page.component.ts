import { Component, OnInit } from '@angular/core';
import { delay, forkJoin } from 'rxjs';

import { SongsService } from '../../services/songs.service';

import { Artist } from '../../interfaces/artist.interface';
import { Song } from '../../interfaces/song.interface';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``,
})
export class ListPageComponent implements OnInit {
  public songs: Song[] = [];
  public artists: { [id: number]: Artist | undefined } = {};
  public company: Company[] = [];
  public isLoading: boolean = true;

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs(): void {
    this.songsService
      .getSongs()
      .pipe(delay(1000))
      .subscribe((songs) => {
        this.songs = songs;
        this.loadArtistForSongs(songs);
      });
  }

  loadArtistForSongs(songs: Song[]): void {
    const artistRequests = songs.map((song) =>
      this.songsService.getArtistById(song.artist)
    );

    forkJoin(artistRequests).subscribe((artists) => {
      songs.forEach((song, index) => {
        this.artists[song.artist] = artists[index];
      });
      this.isLoading = false;
    });
  }

  getArtistById(artistId: number): Artist | undefined {
    return this.artists[artistId];
  }
}
