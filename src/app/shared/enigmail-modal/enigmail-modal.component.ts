import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enigmail-modal',
  templateUrl: './enigmail-modal.component.html',
  styleUrls: ['./enigmail-modal.component.scss']
})
export class EnigmailModalComponent implements OnInit {
  descriptionSpanish: string = 'Página web que cifra y descifra textos y números mediante el método de cifrado César asegurándote una comunicación de correo electrónico fiable y segura.'
  descriptionEnglish: string = 'Website that encrypts and decrypts texts and numbers using the Caesar encryption method ensuring reliable and secure email communication.'
  constructor() { }

  ngOnInit(): void {
  }

}
