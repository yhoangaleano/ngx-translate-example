import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HttpBackend,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';

// AoT requires an exported function for factories
/*export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/main/', '.json');
}*/

export function MultiHttpLoaderFactory(httpBackend: HttpBackend) {
  return new MultiTranslateHttpLoader(httpBackend, [
    './assets/i18n/main/',
    './assets/i18n/shared/',
  ]);
}

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      /*loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },*/
      loader: {
        provide: TranslateLoader,
        useFactory: MultiHttpLoaderFactory,
        deps: [HttpBackend],
      },
    }),
  ],
  exports: [HttpClientModule, TranslateModule],
})
export class CoreModule {}
