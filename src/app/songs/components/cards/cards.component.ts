import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Song } from '../../interfaces/song.interface';
import { Artist } from '../../interfaces/artist.interface';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'songs-song-card',
  templateUrl: './cards.component.html',
  styles: ``,
})
export class CardsComponent implements OnInit {
  @Input()
  public song!: Song;

  @Input()
  public artist?: Artist;

  @Input()
  public company?: Company;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {}
}
