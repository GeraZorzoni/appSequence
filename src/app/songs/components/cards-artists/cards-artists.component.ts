import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artist.interface';

@Component({
  selector: 'song-cards-artists',
  templateUrl: './cards-artists.component.html',
  styles: ``,
})
export class CardsArtistsComponent implements OnInit {
  @Input()
  public artist!: Artist;

  ngOnInit(): void {
    if (!this.artist) throw Error('artist property is required');
  }
}
