import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logo: string ='{FA}';
  taghtml: string = '<html>';
  tag_html: string = '</html>';
  tagbody: string = '<body>';
  tag_body: string = '</body>';
  tagh1: string = '<h1>';
  tag_h1: string = '</h1>';
  tagnav: string = '<nav>';
  tag_nav: string = '</nav>';
  tagp: string = '<p>';
  tag_p: string = '</p>';

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

    navigateToAbout(){
      this.router.navigate(['/about']);
    }
    navigateToResume(){
      this.router.navigate(['/resume']);
    }
    navigateToSkills(){
      this.router.navigate(['/skills']);
    }
    navigateToPorfolio(){
      this.router.navigate(['/works']);
    }
    navigateToContact(){
      this.router.navigate(['/contact']);
    }

}
