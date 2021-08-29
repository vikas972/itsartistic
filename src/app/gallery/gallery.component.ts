import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gallerySketches=[
    {
      'id':1,'name':'photo1','desc':'art work1','img':'../../assets/attack.jpeg'
    },
    {
      'id':2,'name':'photo2','desc':'art work1','img':'../../assets/death.jpeg'
    },
    {
      'id':3,'name':'photo3','desc':'art work1','img':'../../assets/deepika.jpeg'
    },
    {
      'id':4,'name':'photo4','desc':'art work1','img':'../../assets/jr.jpeg'
    },    
    {
      'id':1,'name':'photo1','desc':'art work1','img':'../../assets/kohli.jpeg'
    }
  ];
  galleryCanvas=[
    {
      'id':1,'name':'photo1','desc':'art work1','img':'../../assets/Canvasnature.jpg'
    },
    {
      'id':2,'name':'photo2','desc':'art work1','img':'../../assets/Canvaskrishna.jpg'
    },
    {
      'id':3,'name':'photo3','desc':'art work1','img':'../../assets/Canvasbird.jpg'
    },
    {
      'id':4,'name':'photo4','desc':'art work1','img':'../../assets/CanvasSunset.jpg'
    },    
    {
      'id':5,'name':'photo1','desc':'art work1','img':'../../assets/Canvasb.jpg'
    }
  ];
  galleryPainting=[   
    {
      'id':1,'name':'photo1','desc':'art work1','img':'../../assets/bear.jpg'
    },
    {
      'id':2,'name':'photo2','desc':'art work1','img':'../../assets/ola.jpeg'
    },
    {
      'id':3,'name':'photo3','desc':'art work1','img':'../../assets/poke.jpeg'
    },
    {
      'id':4,'name':'photo4','desc':'art work1','img':'../../assets/loony.jpeg'
    }
  ]

}
