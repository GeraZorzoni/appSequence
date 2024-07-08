import { Component, Input, OnInit } from '@angular/core';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'song-cards-companies',
  templateUrl: './cards-companies.component.html',
  styles: ``,
})
export class CardsCompaniesComponent implements OnInit {
  @Input()
  public company!: Company;

  ngOnInit(): void {
    if (!this.company) throw Error('artist property is required');
  }
}
