import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'',
    component: SkeletonComponent,
    children: [
      {
        path:'about',
        loadChildren:()=>
        import ('./components/about/about.module').then((m)=> m.AboutModule)
      },
      {
        path:'resume',
        loadChildren:()=>
        import ('./components/resume/resume.module').then((m)=> m.ResumeModule)
      },
      {
        path:'skills',
        loadChildren:()=>
        import ('./components/skills/skills.module').then((m)=> m.SkillsModule)
      },
      {
        path:'projects',
        loadChildren:()=>
        import ('./components/portfolio/portfolio.module').then((m)=> m.PortfolioModule)
      },
      {
        path:'contact',
        loadChildren:()=>
        import ('./components/contact/contact.module').then((m)=> m.ContactModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
