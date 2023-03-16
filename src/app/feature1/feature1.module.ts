import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature1Component } from './feature1.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { feature1Routes } from './feature1.routes';
import { LoginFormModule } from '../login-form/login-form.module';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { map } from 'rxjs';
/*
export function featureLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/shared/', '.json');
}

export class CustomMissingTranslationHandler
  implements MissingTranslationHandler
{
  handle(params: MissingTranslationHandlerParams) {
    return params.translateService.currentLoader
      .getTranslation(params.translateService.currentLang)
      .pipe(
        map((r) => {
          const trad = r[params.key];
          console.log('R', r);
          console.log(trad);
          console.log(params);
          if (trad) {
            return trad;
          } else {
            const prefix = (<any>params.translateService.currentLoader).prefix;
            console.warn(
              `translation not found for key ${prefix} ${params.key} in ${params.translateService.currentLang}`
            );
            return `**${params.key}**`;
          }
        })
      );
  }
}*/

@NgModule({
  imports: [
    CommonModule,
    LoginFormModule,
    TranslateModule.forChild(),
    RouterModule.forChild(feature1Routes),
  ],
  declarations: [Feature1Component, LoginComponent],
})
export class Feature1Module {}
