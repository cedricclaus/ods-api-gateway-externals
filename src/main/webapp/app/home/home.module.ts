import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { OdsApiGatewayExternalsSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [OdsApiGatewayExternalsSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class OdsApiGatewayExternalsHomeModule {}
