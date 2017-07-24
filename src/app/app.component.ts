import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
// import * as fromRoot from '../../store/app-store';
// import * as user from '../../store/actions/user.actions';

/**
 * This class represents the main application component.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

//   constructor(private store: Store<fromRoot.AppState>) {}

  ngOnInit() {
      //this.store.dispatch(new user.LoginAction());
  }
}