import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  constructor() { }
  modalShow = false;
  modalSrc: string;
  modalCaption: string;
  modalTitle: string;

  nbItems = 4;

  portfolio = [
    {
      id: 0,
      title: 'Hanbok',
      src: 'kseniya-petukhova-SahEnZR5Ni8-unsplash',
      alt: 'Hanbok on girls'
    },
    {
      id: 1,
      title: 'Sunrise',
      src: 'ciaran-o-brien-LoGWCnEVDgU-unsplash',
      alt: 'Sunrise of Seoul'
    },
    {
      id: 2,
      title: 'Contryside',
      src: 'jongsun-lee-t-klL0oHX8Y-unsplash',
      alt: 'Contryside of South Korea'
    },
    {
      id: 3,
      title: 'Hangul',
      src: 'ariel-kwon-5IW2vxLvTcI-unsplash',
      alt: 'Alphabet of koreans'
    },
    {
      id: 4,
      title: 'Traditional lights',
      src: 'valery-rabchenyuk-5I_oFqB0n6g-unsplash',
      alt: 'Good Luck '
    },
    {
      id: 5,
      title: 'Library  ',
      src: 'yonghyun-lee-cJKfMvJGHD0-unsplash',
      alt: 'Amazing Books'
    }
  ];

  arrayCols = [];

  ngOnInit(): void {

    for (let i = 0; i < this.portfolio.length; i += this.nbItems){
      this.arrayCols.push( this.portfolio.slice(i, i + this.nbItems) );
    }
    console.log('Array for Columns:',this.arrayCols );
  }

  toggleModal(id = 0): void{
    this.modalShow = !this.modalShow;
    this.modalSrc = this.portfolio[id].src;
    this.modalTitle = this.portfolio[id].title;
    this.modalCaption = this.portfolio[id].alt;
  }

  

}
