import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoryComponent } from './category/category.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieComponent } from './movies/movie/movie.component';
import { MoviesDetailsComponent } from './movies/movies-details/movies-details.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({ //Componentler
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryComponent,
    MoviesComponent,
    MovieComponent,
    MoviesDetailsComponent,
    FooterComponent
  ],
  imports: [ //Moduleler
    BrowserModule
  ],
  providers: [], //Servisler
  bootstrap: [AppComponent] //Başlangıç componenti
})
export class AppModule { }
