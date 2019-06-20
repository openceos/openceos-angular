import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    FontAwesomeModule,

  ]

})
export class FasModule {
  constructor() {
    library.add(faCoffee, faGithub);
  }
}
