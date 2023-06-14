import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import the new component
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

@NgModule({
  imports: [  // what ohter module this module use
    CommonModule
  ],
  declarations: [ // what components and directives belong to this module
    CustomerDashboardComponent 
  ],
  exports: [ 
    CustomerDashboardComponent 
  ],
})
export class CustomerDashboardModule {}

/* The declarations array is available for you to add declarables, which are components, directives, and pipes that belong exclusively to this particular module.
 */

/*
To incorporate this feature module into your app, you have to let the root module, app.module.ts, know about it. Notice the CustomerDashboardModule export at the bottom of this file. This exposes it so that other modules can get to it. To import it into the AppModule, add it to the imports in app.module.ts and to the imports array:
*/

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
