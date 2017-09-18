import { NO_ERRORS_SCHEMA } from '@angular/core';
import {
  inject,
  async,
  TestBed,
  ComponentFixture
} from '@angular/core/testing';

import { StoreModule, Store, ActionReducer } from '@ngrx/store';

/**
 * Load the implementations that should be tested
 */
import { InfoComponent } from './info.component';

describe(`Makola: AppComponent`, () => {
  let comp: InfoComponent;
  let fixture: ComponentFixture<InfoComponent>;

  /**
   * async beforeEach
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.provideStore({})
      ],
      declarations: [ InfoComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    /**
     * Compile template and css
     */
    .compileComponents();
  }));

  /**
   * Synchronous beforeEach
   */
  beforeEach(() => {
    fixture = TestBed.createComponent(InfoComponent);
    comp    = fixture.componentInstance;

    /**
     * Trigger initial data binding
     */
    fixture.detectChanges();
  });

  it(`should be readly initialized`, () => {
    expect(fixture).toBeDefined();
    expect(comp).toBeDefined();
  });

  // it('should log ngOnInit', () => {
  //   spyOn(console, 'log');
  //   expect(console.log).not.toHaveBeenCalled();

  //   comp.ngOnInit();
  //   expect(console.log).toHaveBeenCalled();
  // });

});
