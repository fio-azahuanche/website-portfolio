import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talktech-modal',
  templateUrl: './talktech-modal.component.html',
  styleUrls: ['./talktech-modal.component.scss']
})
export class TalktechModalComponent implements OnInit {
  descriptionSpanish: string = 'Aplicación de mensajería instantánea donde las personas pueden registrarse e iniciar sesión para poder enviar mensajes a un canal privado que cada persona puede crear o unirse por su cuenta.'
  descriptionEnglish: string = 'Instant messaging application where people can register and log in to be able to send messages to a private channel that each person can create or join on their own. In this project the API and the interface were made.'
  constructor() { }

  ngOnInit(): void {
  }

}
