import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``,
})
export class LayoutPageComponent {
  public sidebarItems = [
    { label: 'SIDEBAR.SONGS', icon: 'label', url: './list' },
    { label: 'SIDEBAR.ARTISTS', icon: 'label', url: './artist' },
    { label: 'SIDEBAR.COMPANIES', icon: 'label', url: './companies' },
    { label: 'SIDEBAR.NEW_SONG', icon: 'add', url: './new-song' },
  ];

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
    this.translate.use('es');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
