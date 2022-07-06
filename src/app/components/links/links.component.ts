import { Component, OnInit } from '@angular/core';
import { Link } from 'src/app/models/Link';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {
  studyLinks:Link[] = [];
  jobLinks:Link[] = [];
  frontToolsLinks:Link[]=[];
  severalLinks:Link[]=[];

  constructor() { }

  ngOnInit(): void {
    this.getStudyLinks();
    this.getJobLinks();
    this.getfrontToolsLinks();
    this.getSeveralLinks();
  }

  getStudyLinks():void{
    this.studyLinks.push(new Link('https://cursos.alura.com.br/','ALURA', 'school', 'lightgreen'));
    this.studyLinks.push(new Link('https://www.devmedia.com.br/','DEVMEDIA', 'school', 'lightgreen'));
    this.studyLinks.push(new Link('https://www.rocketseat.com.br/','ROCKETSEAT', 'school', 'lightgreen'));
    this.studyLinks.push(new Link('https://www.udemy.com/','UDEMY', 'school', 'lightgreen'));
  }

  getJobLinks():void{
    this.jobLinks.push(new Link('https://br.linkedin.com/','LINCKEDIN', 'work', 'lightcoral'));
    this.jobLinks.push(new Link('https://www.apinfo.com/apinfo/','APINFO', 'work', 'lightcoral'));
    this.jobLinks.push(new Link('https://www.geekhunter.com.br/','GEEKHUNTER', 'work', 'lightcoral'));
    this.jobLinks.push(new Link('https://programathor.com.br/','PROGRAMATHOR', 'work', 'lightcoral'));
    this.jobLinks.push(new Link('https://www.profissionaisti.com.br/','PROFISSIONAIS TI', 'work', 'lightcoral'));
    this.jobLinks.push(new Link('https://trampos.co/','TRAMPOS', 'work', 'lightcoral'));
    this.jobLinks.push(new Link('https://br.indeed.com/','INDEED', 'work', 'lightcoral'));
  }

  getfrontToolsLinks():void{
    this.frontToolsLinks.push(new Link('https://material.angular.io/','MATERIAL', 'important_devices', 'lightseagreen'));
    this.frontToolsLinks.push(new Link('https://getbootstrap.com/','BOOTSTRAP', 'important_devices', 'lightseagreen'));
    this.frontToolsLinks.push(new Link('https://www.primefaces.org/primeng/','PRIMENG', 'important_devices', 'lightseagreen'));
    this.frontToolsLinks.push(new Link('https://www.angularjswiki.com/angular/angular-material-icons-list-mat-icon-list/','MATERIAL ICONS', 'important_devices', 'lightseagreen'));
    this.frontToolsLinks.push(new Link('https://fonts.google.com/','GOOGLE FONTS', 'important_devices', 'lightseagreen'));
    this.frontToolsLinks.push(new Link('https:https://loripsum.net/','LORIPSUM', 'important_devices', 'lightseagreen'));
    this.frontToolsLinks.push(new Link('https://www.4devs.com.br/','4DEVS', 'important_devices', 'lightseagreen'));
    this.frontToolsLinks.push(new Link('https://cssgradient.io/','CSS GRADIENT', 'important_devices', 'lightseagreen'));
    this.frontToolsLinks.push(new Link('https://developers.google.com/chart','GOOGLE CHARTS', 'important_devices', 'lightseagreen'));
    this.frontToolsLinks.push(new Link('https://cssgradient.io/','CSS GRADIENT', 'important_devices', 'lightseagreen'));
    this.frontToolsLinks.push(new Link('https://valor-software.com/ng2-charts/','NG CHARTS', 'important_devices', 'lightseagreen'));
    this.frontToolsLinks.push(new Link('https://css-tricks.com/snippets/css/a-guide-to-flexbox/','FLEXBOX GUIDE', 'important_devices', 'lightseagreen'));
  }

  getSeveralLinks():void{
    this.severalLinks.push(new Link('https://www.w3schools.com/','W3 SCHOOLS', 'link', 'lightsalmon'));
    this.severalLinks.push(new Link('https://www.arduino.cc/reference/en/','ARDUINO', 'link', 'lightsalmon'));
    this.severalLinks.push(new Link('https://pt.stackoverflow.com/','STACKOVERFLOW', 'link', 'lightsalmon'));

  }

}
