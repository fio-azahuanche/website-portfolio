import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carepets-modal',
  templateUrl: './carepets-modal.component.html',
  styleUrls: ['./carepets-modal.component.scss']
})
export class CarepetsModalComponent implements OnInit {
  descriptionSpanish: string = 'Red social de información sobre mascotas🐶🐱 que promueve la ayuda hacia ellos, cuyo propósito es permitir que los usuarios puedan crearse una cuenta, puedan editar su perfil, interactuar con otros usuarios y realizar publicaciones sobre animales perdidos, albergues, eventos, donaciones, etc';
  descriptionEnglish: string = 'Social network of information about pets🐶🐱 that promotes help for them, whose purpose is to allow users to create an account, edit their profile, interact with other users and make posts about lost animals, shelters, events, donations, etc.';
  constructor() { }

  ngOnInit(): void {
  }

}
