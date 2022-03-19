import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataghibli-modal',
  templateUrl: './dataghibli-modal.component.html',
  styleUrls: ['./dataghibli-modal.component.scss']
})
export class DataghibliModalComponent implements OnInit {
  descriptionSpanish: string = 'Página web responsive, que permite a los usuarios tener datos relevantes de las películas de Studio Ghibli. Por lo que, se podrá visualizar información que puede ser manejada por los usuarios, de tal manera que puedan filtrarla y ordenarla según diversas especificaciones.'
  descriptionEnglish: string = 'Responsive website, which allows users to have relevant data on 🎎🎌Studio Ghibli films. Therefore, it will be possible to display information that can be managed by users, so that they can filter and sort it according to various specifications.'
  constructor() { }

  ngOnInit(): void {
  }

}
