import { Component, OnInit } from '@angular/core';
import { SongsService } from '../../services/songs.service';
import { Company } from '../../interfaces/company.interface';
import { delay } from 'rxjs';

@Component({
  selector: 'list-page-companies',
  templateUrl: './list-page-companies.component.html',
  styles: ``,
})
export class ListPageCompaniesComponent implements OnInit {
  public companies: Company[] = [];
  public isLoading: boolean = true;

  constructor(private songsService: SongsService) {}

  ngOnInit(): void {
    this.loadCompanies();
  }
  loadCompanies(): void {
    this.songsService
      .getCompany()
      .pipe(delay(1000))
      .subscribe((companies) => {
        this.companies = companies;
        this.isLoading = false;
      });
  }
}
