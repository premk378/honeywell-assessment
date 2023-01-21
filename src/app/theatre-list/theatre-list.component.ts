import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theatre-list',
  templateUrl: './theatre-list.component.html',
  styleUrls: ['./theatre-list.component.css']
})
export class TheatreListComponent implements OnInit{
 
  theatres: any[] = []
  theatreListMock = [
    {
      id: 1,
      name: "Preston Prime",
      location: "Gachibowli",
      slots: ["11:00 AM", "5:30 PM", "8:10PM"]
    },
    {
      id: 2,
      name: "Sudha Cinepolis",
      location: "Gachibowli",
      slots: ["11:00 AM", "5:30 PM", "8:10PM"]
    },
    {
      id: 3,
      name: "AMB Cinemas",
      location: "Gachibowli",
      slots: ["11:00 AM", "5:30 PM", "8:10PM"]
    },
    {
      id: 4,
      name: "In Orbit Mall",
      location: "Gachibowli",
      slots: ["11:00 AM", "5:30 PM", "8:10PM"]
    },
    {
      id: 5,
      name: "PVR Icon",
      location: "Gachibowli",
      slots: ["11:00 AM", "5:30 PM", "8:10PM"]
    },
    {
      id: 6,
      name: "Carnival Madhapur",
      location: "Gachibowli",
      slots: ["11:00 AM", "5:30 PM", "8:10PM"]
    },
  ]

  ngOnInit(): void {
    this.theatres = this.theatreListMock;
  }

}
