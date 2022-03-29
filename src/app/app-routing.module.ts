import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooklandpageComponent } from './ui/booklandpage/booklandpage.component';
import { CounterlandpageComponent } from './ui/counterlandpage/counterlandpage.component';
import { ObslandpageComponent } from './ui/obslandpage/obslandpage.component';
import { PagenotfoundComponent } from './ui/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: 'bookpage' , component: BooklandpageComponent },
  { path: 'counterpage' , component: CounterlandpageComponent },
  { path: 'obspage' , component: ObslandpageComponent },

  { path: '',   redirectTo: '/bookpage', pathMatch: 'full' },
  { path: '**' , component: PagenotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
