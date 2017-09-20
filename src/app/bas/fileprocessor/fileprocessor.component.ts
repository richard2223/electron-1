
import {Component, OnInit} from '@angular/core';

import {Store} from '@ngrx/store';
import {Subject} from "rxjs/Rx";
import {ElectronService} from "ngx-electron";

@Component({
  selector: 'bas-file-processor',
  templateUrl: './fileprocessor.component.html'
})
export class BASFileProcessorComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  // persons: any[] = [];
  // // We use this trigger because fetching the list of persons can be quite long,
  // // thus we ensure the data is fetched before rendering
  // dtTrigger: Subject<any> = new Subject();


  constructor(private _electronService:ElectronService) {


  }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
      // displayLength: 2
    };
    this._electronService.ipcRenderer.on('files-loaded', function (event, result) {
      let message = `Result : ${result}`;
      console.log(message);
    })
    this.loadBASFiles();
  }

  public loadBASFiles() {
    if(this._electronService.isElectronApp) {
      this._electronService.ipcRenderer.send('load-files','go');
    }
  }
}
