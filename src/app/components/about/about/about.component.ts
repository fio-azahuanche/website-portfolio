import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public taghtml: string = '<html>';
  public tag_html: string = '</html>';
  public tagbody: string = '<body>';
  public tag_body: string = '</body>';
  public tagh2: string = '<h2>';
  public tag_h2: string = '</h2>';
  public tagh3: string = '<h3>';
  public tag_h3: string = '</h3>';
  public tagp: string = '<p>';
  public tag_p: string = '</p>';
  constructor() { }

  ngOnInit(): void {
  }

}
