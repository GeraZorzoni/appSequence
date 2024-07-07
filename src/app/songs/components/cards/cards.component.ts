import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../../interfaces/song.interfaces';

@Component({
  selector: 'songs-song-card',
  templateUrl: './cards.component.html',
  styles: ``,
})
export class CardsComponent implements OnInit {
  @Input()
  public song!: Song;

  ngOnInit(): void {
    if (!this.song) throw Error('Song property is required');
  }
}
