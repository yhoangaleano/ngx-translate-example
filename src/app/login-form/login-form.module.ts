import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { LoginFormComponent } from './login-form.component';

@NgModule({
  imports: [CommonModule, TranslateModule.forChild()],
  declarations: [LoginFormComponent],
  exports: [LoginFormComponent],
})
export class LoginFormModule {}
