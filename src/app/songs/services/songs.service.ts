import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Song } from '../interfaces/song.interfaces';
import { environments } from '../../../environments/environments';

@Injectable({ providedIn: 'root' })
export class SongsService {
  private baseUrl: string = environments.baseUrl;

  constructor(private http: HttpClient) {}

  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(`${this.baseUrl}/songs`);
  }

  getSongById(id: string): Observable<Song | undefined> {
    return this.http
      .get<Song>(`${this.baseUrl}/songs/${id}`)
      .pipe(catchError((error) => of(undefined)));
  }
}
