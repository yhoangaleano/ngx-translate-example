import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService, TranslationChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>{{ 'HOME.TITLE' | translate }}</h2>
      <label>
        {{ 'HOME.SELECT' | translate }}
        <select #langSelect (change)="translate.use(langSelect.value)">
          <option *ngFor="let lang of translate.getLangs()" [value]="lang" [selected]="lang === translate.currentLang">{{ lang }}</option>
        </select>
      </label>
    </div>

    <router-outlet></router-outlet>

    <a [routerLink]="['/feature1/login']">
      link to user component
    </a>
  `,
})
export class AppComponent implements AfterViewInit {
  constructor(public readonly translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    console.log(browserLang);

    try {
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    } catch (error) {
      console.log(error);
    }
  }
  ngAfterViewInit(): void {
    this.translate.get('SHARED.LOGINFORM.TITLE').subscribe({
      next: (data) => {
        console.log(data);
      },
    });

    this.translate.onLangChange.subscribe((event: TranslationChangeEvent) => {
      const name = this.translate.instant('SHARED.LOGINFORM.TITLE');
      console.log(name);
    });

    console.log(this.translate.instant('SHARED.LOGINFORM.TITLE', {}));
  }
}
