import { Component, Input } from '@angular/core';
import Movie from 'src/app/Model/Movie.Model';
import { MovieEditorComponent } from '../movie-editor/movie-editor.component';


@Component({
  selector: 'app-movie-component',
  templateUrl: './movie-component.component.html',
  styleUrls: ['./movie-component.component.css']
})
export class MovieComponentComponent 
{

  showEditComponent= false; // declare a varibale for ng If  display edit component 

  @Input() myMovie: Movie =new Movie(); // instace for display movie list

  didWatch() // if its click ! its not eatch (turn to false)
  {
  this.myMovie.watched = !this.myMovie.watched;
  }

  EditDetails() 
  { 
    this.showEditComponent = !this.showEditComponent;
  }


}
