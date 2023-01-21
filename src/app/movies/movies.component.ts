import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{

  filteredMovies : any[] = [];
  moviesMockData = [
    {
      id: 1,
      movieName: "1917",
      duration: "2h 27min",
      description: "This is a sample description of the movie",
      upvotes: 117,
      imageName: "1917.jpg"
    },
    {
      id: 2,
      movieName: "airlift",
      duration: "2h 27min",
      description: "This is a sample description of the movie",
      upvotes: 117,
      imageName: "airlift.jpg"
    },
    {
      id: 3,
      movieName: "aladdin",
      duration: "2h 27min",
      description: "This is a sample description of the movie",
      upvotes: 117,
      imageName: "aladdin.jpg"
    },
    {
      id: 4,
      movieName: "assassin",
      duration: "2h 27min",
      description: "This is a sample description of the movie",
      upvotes: 117,
      imageName: "assassin.jpg"
    },
    {
      id: 5,
      movieName: "black-panther",
      duration: "2h 27min",
      description: "This is a sample description of the movie",
      upvotes: 117,
      imageName: "black-panther.jpg"
    },
    {
      id: 6,
      movieName: "freedom",
      duration: "2h 27min",
      description: "This is a sample description of the movie",
      upvotes: 117,
      imageName: "freedom.jpg"
    },
    {
      id: 7,
      movieName: "moonlight",
      duration: "2h 27min",
      description: "This is a sample description of the movie",
      upvotes: 117,
      imageName: "moonlight.jpg"
    },
    {
      id: 8,
      movieName: "seven",
      duration: "2h 27min",
      description: "This is a sample description of the movie",
      upvotes: 117,
      imageName: "seven.jpg"
    }
  ]
  ngOnInit(): void {
    this.filteredMovies = this.moviesMockData;
  }

}
