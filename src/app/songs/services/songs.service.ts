import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

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
    return this.http.get<Artist[]>(`${this.baseUrl}/companies`);
  }

  getCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/artist`);
  }

  getSongById(id: string): Observable<Song | undefined> {
    return this.http
      .get<Song>(`${this.baseUrl}/songs/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }
}
