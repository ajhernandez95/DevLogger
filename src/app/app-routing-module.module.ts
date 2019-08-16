import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { LogsComponent } from './components/pages/logs/logs.component';
import { AboutComponent } from './components/pages/about/about.component';
import { DetailsComponent } from './components/pages/details/details.component';

const routes: Routes = [
  { path: '', component: LogsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'details/:id', component: DetailsComponent }
];

@NgModule({
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forRoot(routes)]
})
export class AppRoutingModuleModule {}
