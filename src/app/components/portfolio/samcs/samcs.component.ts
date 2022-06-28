import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-samcs',
  templateUrl: './samcs.component.html',
  styleUrls: ['./samcs.component.css'],
})
export class SamcsComponent implements OnInit {
  images: any[] = [
    {
      previewImageSrc: 'assets/samcs-example-1.jpg',
      thumbnailImageSrc: 'assets/samcs-example-1.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela de login',
    },
    {
      previewImageSrc: 'assets/samcs-example-2.jpg',
      thumbnailImageSrc: 'assets/samcs-example-2.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela home',
    },
    {
      previewImageSrc: 'assets/samcs-example-3.jpg',
      thumbnailImageSrc: 'assets/samcs-example-3.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela de turmas',
    },
    {
      previewImageSrc: 'assets/samcs-example-4.jpg',
      thumbnailImageSrc: 'assets/samcs-example-4.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela de parametrização de dias de aula',
    },
    {
      previewImageSrc: 'assets/samcs-example-5.jpg',
      thumbnailImageSrc: 'assets/samcs-example-5.jpg',
      alt: 'Telas de alunos',
      title: 'Tela de',
    },
    {
      previewImageSrc: 'assets/samcs-example-6.jpg',
      thumbnailImageSrc: 'assets/samcs-example-6.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela de detalhes de aluno',
    },
    {
      previewImageSrc: 'assets/samcs-example-7.jpg',
      thumbnailImageSrc: 'assets/samcs-example-7.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela de gereção de relatório de ocorrências',
    },
    {
      previewImageSrc: 'assets/samcs-example-8.jpg',
      thumbnailImageSrc: 'assets/samcs-example-8.jpg',
      alt: 'Telas a aplicação',
      title: 'Tela de geração de crachá',
    },
    {
      previewImageSrc: 'assets/samcs-example-9.jpg',
      thumbnailImageSrc: 'assets/samcs-example-9.jpg',
      alt: 'Telas a aplicação',
      title: 'Crachá em pdf para impressão',
    },
  ];
  displayBasic: boolean = false;
  responsiveOptions2: any[] = [
    {
      breakpoint: '1500px',
      numVisible: 5,
    },
    {
      breakpoint: '1024px',
      numVisible: 3,
    },
    {
      breakpoint: '768px',
      numVisible: 2,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];

  galleryFullScreen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showFullScreen() {
    this.galleryFullScreen = !this.galleryFullScreen;
    this.displayBasic = !this.displayBasic;
  }
}
