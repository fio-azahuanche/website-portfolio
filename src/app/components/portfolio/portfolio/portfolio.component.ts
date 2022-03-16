import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public taghtml: string = '<html>';
  public tag_html: string = '</html>';
  public tagbody: string = '<body>';
  public tag_body: string = '</body>';
  public tagh2: string = '<h2>';
  public tag_h2: string = '</h2>';
  public tagh3: string = '<h3>';
  public tag_h3: string = '</h3>';
  public tagdiv: string = '<div>';
  public tag_div: string = '</div>';
  public tagp: string = '<p>';
  public tag_p: string = '</p>';
  public tagsection: string = '<section>';
  public tag_section: string = '</section>';
  constructor() { }

  ngOnInit(): void {
  }

  navigate(link:string){
    window.open(link, '_blank');
  }


}
