import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PortalComponent } from './portal/portal.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '', component: PortalComponent
      }
    ]),
  ],
  declarations: [
    PortalComponent
  ],
})
export class PluginModule { }
