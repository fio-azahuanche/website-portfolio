import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {
  public taghtml: string = '<html>';
  public tag_html: string = '</html>';
  public tagbody: string = '<body>';
  public tag_body: string = '</body>';
  public tagh2: string = '<h2>';
  public tag_h2: string = '</h2>';
  public tagh3: string = '<h3>';
  public tag_h3: string = '</h3>';
  public tagh4: string = '<h4>';
  public tag_h4: string = '</h4>';
  public tagp: string = '<p>';
  public tag_p: string = '</p>';
  public tagsection: string = '<section>';
  public tag_section: string = '</section>';
  constructor() { }

  ngOnInit(): void {
  }

}
