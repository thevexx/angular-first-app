import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UppercaseComponent } from './uppercase/uppercase.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent
    },
    {
      path: 'contact',
      component: ContactComponent
    },
    {
      path: 'uppercase',
      component: UppercaseComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
