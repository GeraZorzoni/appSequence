import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'song-cards-companies',
  templateUrl: './cards-companies.component.html',
  styles: ``,
})
export class CardsCompaniesComponent implements OnInit {
  @Input()
  public company!: Company;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  ngOnInit(): void {
    if (!this.company) throw Error('artist property is required');
  }
}
