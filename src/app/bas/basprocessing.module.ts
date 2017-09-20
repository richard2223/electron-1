import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AngularBasicModalModule} from "angular-basic-modal";
import {TradeChannelRoutes} from "./basprocessing.routing";
import {BASFileProcessorComponent} from "./fileprocessor/fileprocessor.component";
import {DataTablesModule} from "angular-datatables";
import {NgxElectronModule} from "ngx-electron";


@NgModule({
    declarations: [
        BASFileProcessorComponent

    ],
    exports: [
        BASFileProcessorComponent,
        DataTablesModule,
        NgxElectronModule
    ],
    imports: [
        RouterModule.forChild(TradeChannelRoutes),
        AngularBasicModalModule

    ],
    providers: [

    ]
})
export class    BASModule {}
