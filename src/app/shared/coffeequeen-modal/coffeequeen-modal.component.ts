import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffeequeen-modal',
  templateUrl: './coffeequeen-modal.component.html',
  styleUrls: ['./coffeequeen-modal.component.scss']
})
export class CoffeequeenModalComponent implements OnInit {
  descriptionSpanish: string = 'Es una aplicación web para una cafetería donde se puede tomar pedidos y está enfocada para los empleados con los siguientes roles: 👩‍💼Administrador, 🤵Mesero y 👩‍🍳Jefe de Cocina.'
  descriptionEnglish: string = 'It is a web application for a cafeteria where you can take orders and is focused for employees with the following roles: 👩‍💼Administrator, 🤵Waiter and 👩‍🍳Chef.'
  constructor() { }

  ngOnInit(): void {
  }

}
