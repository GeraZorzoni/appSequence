import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { Company } from '../../interfaces/company.interface';

@Component({
  selector: 'list-page-companies',
  templateUrl: './list-page-companies.component.html',
  styles: ``,
})
export class ListPageCompaniesComponent implements OnInit {
  public companies: Company[] = [];

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.songsService
      .getCompany()
      .subscribe((companies) => (this.companies = companies));
  }
}
