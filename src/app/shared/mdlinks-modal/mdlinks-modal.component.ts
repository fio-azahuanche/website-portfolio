import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdlinks-modal',
  templateUrl: './mdlinks-modal.component.html',
  styleUrls: ['./mdlinks-modal.component.scss']
})
export class MdlinksModalComponent implements OnInit {
  descriptionEnglish: string = 'It is a library that allows you to validate URLs inside markdown files. It will allow you to obtain: link status, total links, unique links and broken links.'
  constructor() { }

  ngOnInit(): void {
  }

}
