import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'sd-demo',
  templateUrl: './features.component.html',
  styles: [
    `
#menu {
  min-height: 1200px !important;
}

h4 {
  color: #00395d;
}

.progress-bar-success {
    background-color: #5cb85c;
}

.progress-bar-info {
    background-color: #5bc0de;
}
    `
  ]
})
export class FeaturesComponent {

  constructor(public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    this.randomStacked();
  }

  public max: number = 200;
  public type: string;
  public stacked: any[] = [];
  public ismeridian: boolean = true;

  public mytime: Date = new Date();

  public randomStacked(): void {
    let types = ['success', 'info', 'warning', 'danger'];

    this.stacked = [];
    let total = 0;
    let n = Math.floor((Math.random() * 4) + 1);
    for (let i = 0; i < n; i++) {
      let index = Math.floor((Math.random() * 4));
      let value = Math.floor((Math.random() * 30) + 1);
      total += value;
      this.stacked.push({
        value,
        max: value, // i !== (n - 1) ? value : 100,
        type: types[index]
      });
    }
  }

  showSuccess() {
    this.toastr.success('Toastr Message!', 'Success!');
  }

  public toggleMode(): void {
    this.ismeridian = !this.ismeridian;
  }
}
