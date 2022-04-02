import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriviaModalComponent } from './trivia-modal/trivia-modal.component';
import { CoffeequeenModalComponent } from './coffeequeen-modal/coffeequeen-modal.component';
import { CarepetsModalComponent } from './carepets-modal/carepets-modal.component';
import { DataghibliModalComponent } from './dataghibli-modal/dataghibli-modal.component';
import { MdlinksModalComponent } from './mdlinks-modal/mdlinks-modal.component';
import { EnigmailModalComponent } from './enigmail-modal/enigmail-modal.component';
import { MichiModalComponent } from './michi-modal/michi-modal.component';
import { TalentedModalComponent } from './talented-modal/talented-modal.component';
import { TalktechModalComponent } from './talktech-modal/talktech-modal.component';
//import { MatCarouselModule } from 'ng-mat-carousel';



@NgModule({
  declarations: [
    TriviaModalComponent,
    CoffeequeenModalComponent,
    CarepetsModalComponent,
    DataghibliModalComponent,
    MdlinksModalComponent,
    EnigmailModalComponent,
    MichiModalComponent,
    TalentedModalComponent,
    TalktechModalComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TriviaModalComponent,
    CoffeequeenModalComponent,
    CarepetsModalComponent,
    DataghibliModalComponent,
    MdlinksModalComponent,
    EnigmailModalComponent,
    MichiModalComponent,
    TalentedModalComponent,
    TalktechModalComponent
  ]
})
export class SharedModule { }
