import { Component } from '@angular/core';
import Movie from 'src/app/Model/Movie.Model';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: Movie[]= [

   new Movie(4,"Toy Story",1998,"Toy Story i Buzz Lightyear.",
"https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
false),
new Movie(3,"Toy story 2",2002,"Toyssssss","https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Toy_Story_logo.svg/375px-Toy_Story_logo.svg.png",false)

]

addNewMovie(newMovie :Movie){
    this.movies.push(newMovie)
}
}
