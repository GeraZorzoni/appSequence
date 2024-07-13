import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, delay, forkJoin, of, switchMap } from 'rxjs';

import { SongsService } from '../../services/songs.service';

import { Song } from '../../interfaces/song.interface';
import { Artist } from '../../interfaces/artist.interface';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'app-song-page',
  templateUrl: './song-page.component.html',
  styles: ``,
})
export class SongPageComponent implements OnInit {
  public song?: Song;
  public artist?: Artist;
  public company?: Company;

  constructor(
    private songsService: SongsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1000),
        switchMap(({ id }) =>
          forkJoin({
            song: this.songsService.getSongById(id).pipe(
              catchError(() => {
                console.error('Error fetching song');
                return of(undefined);
              })
            ),
            artist: this.songsService.getSongById(id).pipe(
              switchMap((song) => {
                if (!song) {
                  return of(undefined);
                }
                return this.songsService.getArtistById(song.artist).pipe(
                  catchError(() => {
                    console.error('Error fetching artist');
                    return of(undefined);
                  })
                );
              })
            ),
            company: this.songsService.getSongById(id).pipe(
              switchMap((song) => {
                if (!song) {
                  return of(undefined);
                }
                return this.songsService
                  .getCompanyBySongId(song.id)

                  .pipe(
                    catchError(() => {
                      console.error('Error fetching company');
                      return of(undefined);
                    })
                  );
              })
            ),
          })
        )
      )
      .subscribe(({ song, artist, company }) => {
        if (!song || !artist || !company) {
          this.router.navigate(['./song/list']);
          return;
        }
        this.song = song;
        this.artist = artist;
        this.company = company;
      });
  }

  goBack(): void {
    this.router.navigateByUrl('/songs/list');
  }
}
