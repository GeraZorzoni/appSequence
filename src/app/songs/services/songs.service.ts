import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';

import { environments } from '../../../environments/environments';

import { Song } from '../interfaces/song.interface';
import { Artist } from '../interfaces/artist.interface';
import { Company } from '../interfaces/company.interface';

@Injectable({ providedIn: 'root' })
export class SongsService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseUrl}/songs`);
  }

  getArtist(): Observable<Artist[]> {
    return this.http.get<Artist[]>(`${this.baseUrl}/artists`);
  }

  getCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/companies`);
  }

  getSongById(id: number): Observable<Song | undefined> {
    return this.http
      .get<Song>(`${this.baseUrl}/songs/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }

  getArtistById(id: number): Observable<Artist | undefined> {
    return this.http
      .get<Artist>(`${this.baseUrl}/artists/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }
  getCompanyBySongId(songId: number): Observable<Company | undefined> {
    return this.getCompany().pipe(
      map((companies) => {
        return companies.find((company) =>
          company.songs.includes(Number(songId))
        );
      }),
      catchError((error) => {
        return of(undefined);
      })
    );
  }
}
