import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AngularBasicModalModule} from "angular-basic-modal";
import {TradeChannelRoutes} from "./basprocessing.routing";
import {BASFileProcessorComponent} from "./fileprocessor/fileprocessor.component";
import { DataTablesModule } from 'angular-datatables';


@NgModule({
    declarations: [
        BASFileProcessorComponent

    ],
    exports: [
        BASFileProcessorComponent
    ],
    imports: [
        RouterModule.forChild(TradeChannelRoutes),
        AngularBasicModalModule,
        DataTablesModule

    ],
    providers: [

    ]
})
export class    BASModule {}
