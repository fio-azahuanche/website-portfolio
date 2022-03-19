import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-michi-modal',
  templateUrl: './michi-modal.component.html',
  styleUrls: ['./michi-modal.component.scss']
})
export class MichiModalComponent implements OnInit {
  descriptionSpanish: string = 'Recreación del famoso juego "Tic-Tac-Toe" utilizando ReactJS.'
  descriptionEnglish: string = 'Recreated the famous game "Tic-Tac-Toe" using ReactJS.'
  constructor() { }

  ngOnInit(): void {
  }

}
