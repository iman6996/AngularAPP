import { Component, OnInit } from '@angular/core';
import { DateService } from '../service/date.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  team = [
    {icon: 'avatar3',
    firstname: 'Han-Byul',
    lastname: 'Kim',
    status: 'Web Designer'
    },
    {icon: 'avatar3',
    firstname: 'Mi-na',
    lastname: 'Park',
    status: 'Developer'
    },
    {icon: 'avatar6',
    firstname: 'Chae-lin',
    lastname: 'Lee',
    status: 'IT Manager'
    },
    {
    icon: 'avatar4',
    firstname: 'Yoo',
    lastname: 'Gong',
    status: 'Admin System'
    },
    {
      icon: 'avatar1',
      firstname: 'Seo-Joon',
      lastname: 'Park',
      status: 'President'
    }
  ];

  constructor(public dateService : DateService) { }

  ngOnInit(): void {
  }

}
