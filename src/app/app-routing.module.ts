import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { IpAddressFinderComponent } from './ip-address-finder/ip-address-finder.component';
import { MarkdownPreviewerComponent } from './markdown-previewer/markdown-previewer.component';

const routes: Routes = [
	{ path: 'ip-address-finder', component: IpAddressFinderComponent },
	{ path: 'quote-generator', component: QuoteGeneratorComponent },
	{ path: 'image-cropper', component: ImageCropperComponent },
	{ path: 'markdown-previewer', component: MarkdownPreviewerComponent },
	{ path: '', component: HomeComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
