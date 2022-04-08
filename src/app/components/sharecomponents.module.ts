import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HolamodalbarComponent } from './holamodalbar/holamodalbar.component';
import { HolatoolbarComponent } from './holatoolbar/holatoolbar.component';
import { HolafooterComponent } from './holafooter/holafooter.component';

@NgModule({
    declarations: [HolatoolbarComponent, HolamodalbarComponent,HolafooterComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [HolatoolbarComponent,HolamodalbarComponent,HolafooterComponent]
})

export class ShareComponentModule {}
