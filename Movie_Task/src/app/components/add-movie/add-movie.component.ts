import { Component, EventEmitter, Input, Output  } from '@angular/core';
import Movie from 'src/app/Model/Movie.Model';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent {
  @Input() movie: Movie =new Movie(); // import movie for handle add movie
  @Output() addMovie = new EventEmitter<any>();


  handleAddMovie(){ 
    this.addMovie.emit(this.movie)
    this.movie = new Movie();
  }
  }

