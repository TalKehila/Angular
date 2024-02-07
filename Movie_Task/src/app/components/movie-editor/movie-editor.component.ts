import { Component, Input } from '@angular/core';
import Movie from 'src/app/Model/Movie.Model';

@Component({
  selector: 'app-movie-editor',
  templateUrl: './movie-editor.component.html',
  styleUrls: ['./movie-editor.component.css']
})
export class MovieEditorComponent {

  @Input () myMovie = new Movie(); // for movie editor component html file 

}
