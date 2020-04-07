import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { IpAddressFinderComponent } from './ip-address-finder/ip-address-finder.component';

const routes: Routes = [
{ path: 'ip-address-finder', component: IpAddressFinderComponent },
  { path: 'image-cropper', component: ImageCropperComponent },
  { path: '', component: HomeComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
