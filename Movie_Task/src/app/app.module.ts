import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MovieComponentComponent } from './components/movie-component/movie-component.component';
import Movie from './Model/Movie.Model';
import { UserComponentComponent } from './components/user-component/user-component.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieEditorComponent } from './components/movie-editor/movie-editor.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { UserListComponent } from './components/user-list/user-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponentComponent,
    UserComponentComponent,
    MovieListComponent,
    MovieEditorComponent,
    AddMovieComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
     FormsModule,// this add for ngModel
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
