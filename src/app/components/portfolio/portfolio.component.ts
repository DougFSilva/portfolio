import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/Project';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  allProjects:Project[] = [];
  filterProjects:Project[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setProjects();
    this.filterProjects = this.allProjects;
  }

  setProjects():void{
    this.allProjects.push(new Project('SAMCS',
    'Sistema de gerenciamento e controle de acesso escolar',
    [],
    'assets/samcs-principal.jpg'
    ));
    this.allProjects.push(new Project('Em breve',
    'Em processo de desenvolvimento',
    [],
    'assets/new-project.jpg'
    ));
  }

  filterProject(event: any):void{
    if(event.target.value == null){
      this.filterProjects = this.allProjects;
    }else{
      let filter = event.target.value;
      this.filterProjects = this.allProjects.filter(project=> project.title.toLowerCase().includes(filter.toLowerCase()))
    }
  }
}
