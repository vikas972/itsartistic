import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'work',component:WorkComponent},
  {path:'about',component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
