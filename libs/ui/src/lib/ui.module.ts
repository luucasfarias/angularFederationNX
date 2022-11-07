import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';

import { ButtonModule } from 'primeng/button';


@NgModule({
  imports: [CommonModule,
    ButtonModule],
  declarations: [ButtonComponent, HeaderComponent, TitleComponent],
  exports: [ButtonComponent, HeaderComponent, TitleComponent]
})
export class UiModule { }
