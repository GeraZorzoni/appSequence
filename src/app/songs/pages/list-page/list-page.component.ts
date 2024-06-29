import { Component, OnInit } from '@angular/core';
import { Song } from '../../interfaces/song.interfaces';
import { SongsService } from '../../services/songs.service';

@Component({
  templateUrl: './list-page.component.html',
  styles: ``,
})
export class ListPageComponent implements OnInit {
  public songs: Song[] = [];

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.songsService.getSongs().subscribe((songs) => (this.songs = songs));
  }
}
