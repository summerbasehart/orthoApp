import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageListComponent } from './image-list/image-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'image-list' },
  { path: 'image-list', component: ImageListComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
