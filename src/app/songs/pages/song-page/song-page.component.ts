import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';

import { SongsService } from '../../services/songs.service';
import { Song } from '../../interfaces/song.interface';

@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styles: ``,
})
export class SongPageComponent implements OnInit {
  public song?: Song;

  constructor(
    private songsService: SongsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap(({ id }) => this.songsService.getSongById(id))
      )
      .subscribe((song) => {
        if (!song) return this.router.navigate(['./songs/list']);

        this.song = song;
        return;
      });
  }

  goBack(): void {
    this.router.navigateByUrl('/songs/list');
  }
}
