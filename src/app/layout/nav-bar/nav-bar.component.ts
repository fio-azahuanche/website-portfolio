import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  logo: string ='<FA/>';
  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  navigateToHome(){
    this.router.navigate(['']);
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
      this.router.navigate(['/projects']);
    }
    navigateToContact(){
      this.router.navigate(['/contact']);
    }

  isOpen = false;

  toggle():void {
    this.isOpen = !this.isOpen;
  }

}
