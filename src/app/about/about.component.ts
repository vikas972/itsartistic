import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  about=[
    {
      'id':1,'name':'photo1','desc':'art work1','img':'../../assets/attack.jpeg'
    },
    {
      'id':2,'name':'photo2','desc':'art work1','img':'../../assets/death.jpeg'
    },
    {
      'id':3,'name':'photo3','desc':'art work1','img':'../../assets/deepika.jpeg'
    }
  ]
}
