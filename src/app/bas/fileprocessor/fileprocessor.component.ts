
import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Subject} from "rxjs/Rx";

@Component({
  selector: 'bas-file-processor',
  templateUrl: './fileprocessor.component.html'
})
export class BASFileProcessorComponent implements OnInit {

  // dtOptions: DataTables.Settings = {};
  persons: any[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  // dtTrigger: Subject<any> = new Subject();


  constructor() {


  }

  ngOnInit() {
    // this.dtOptions = {
    //   paginationType: 'full_numbers',
    //   displayLength: 2
    // };
  }

}
