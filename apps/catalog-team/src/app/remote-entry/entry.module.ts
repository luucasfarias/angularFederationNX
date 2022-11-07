import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UiModule } from '@anymarket-frontend/ui';
import { DataService } from './data.service';
import { TreeModule } from 'primeng/tree';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [RemoteEntryComponent, NxWelcomeComponent],
  imports: [
    CommonModule,
    TreeModule,
    SkeletonModule,
    UiModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteEntryComponent,
      },
    ]),
  ],
  providers: [DataService],
})
export class RemoteEntryModule {}
