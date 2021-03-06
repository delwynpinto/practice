import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MarkdownModule } from 'ngx-markdown';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { MatTooltipModule, MatCardModule, MatTableModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatExpansionModule } from  '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { IpAddressFinderComponent } from './ip-address-finder/ip-address-finder.component';
import { MarkdownPreviewerComponent } from './markdown-previewer/markdown-previewer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageCropperComponent,
    IpAddressFinderComponent,
    QuoteGeneratorComponent,
    MarkdownPreviewerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatExpansionModule,
    MatTableModule,
    MatCardModule,
    FontAwesomeModule,
    MatTooltipModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(library: FaIconLibrary) {
    // Added icons to the library for convenient access in other components
    library.addIcons(faFacebook);
    library.addIcons(faTwitter);
  }
}
