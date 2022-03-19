import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talented-modal',
  templateUrl: './talented-modal.component.html',
  styleUrls: ['./talented-modal.component.scss']
})
export class TalentedModalComponent implements OnInit {
  descriptionSpanish: string = 'Es un juego de memoria web inspirado en todas esas mujeres destacadas en ciencia, literatura, arte y política. '
  descriptionEnglish: string = 'It is a web memory game inspired by all those outstanding women in science, literature, art and politics.'
  constructor() { }

  ngOnInit(): void {
  }

}
