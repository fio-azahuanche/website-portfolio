import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trivia-modal',
  templateUrl: './trivia-modal.component.html',
  styleUrls: ['./trivia-modal.component.scss']
})
export class TriviaModalComponent implements OnInit {
  descriptionSpanish: string = 'Es una aplicación web de un juego, que consiste en la formulación de preguntas respecto a dos temas en particular: cultura y turismo. De las cuales se les agregarán tres opciones como respuesta, en tanto, el participante deberá escoger entre una de ellas que considere es la correcta, obteniendo un puntaje final.'
  descriptionEnglish: string = 'It is a web application of a game, which consists in the formulation of questions regarding two topics in particular: culture and tourism. Three options will be added as answers, and the participant will have to choose one of them that considers to be the correct one, obtaining a final score.'

  constructor() { }

  ngOnInit(): void {
  }

}
