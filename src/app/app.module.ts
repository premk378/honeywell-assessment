import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { TheatreListComponent } from './theatre-list/theatre-list.component';
import { MoviesComponent } from './movies/movies.component';
import { SeatLayoutComponent } from './seat-layout/seat-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    TheatreListComponent,
    MoviesComponent,
    SeatLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
