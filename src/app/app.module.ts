import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { MatCardModule, MatTableModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatExpansionModule } from  '@angular/material';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ImageCropperComponent } from './image-cropper/image-cropper.component';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { IpAddressFinderComponent } from './ip-address-finder/ip-address-finder.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImageCropperComponent,
    IpAddressFinderComponent,
    QuoteGeneratorComponent
  ],
  imports: [
    BrowserModule,
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
    FontAwesomeModule
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
