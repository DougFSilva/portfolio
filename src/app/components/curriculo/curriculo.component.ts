import { Experience } from './../../models/Experience';
import { Course } from './../../models/Course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.css'],
})
export class CurriculoComponent implements OnInit {
  courses: Course[] = [];
  filterCourses: Course[] = [];
  selectedCourse: string = 'todos';
  experiences: Experience[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getCourses();
    this.getExperiences();
  }

  getCourses(): void {
    this.courses.push(
      new Course(
        'Graduação',
        'Analise e desenvolvimento de sistemas',
        'tecnologia',
        2000,
        'Cruzeiro do sul virtual',
        'Outubro de 2020',
        ' Outubro de 2022',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'SQL com MySQL: manipule e consulte dados',
        'tecnologia',
        12,
        'ALURA',
        '',
        'Fevereiro de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Consultas SQL: avançando o SQL com MySQL',
        'tecnologia',
        14,
        'ALURA',
        '',
        'Fevereiro de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Comandos DML: manipulação de dados com MySQL',
        'tecnologia',
        10,
        'ALURA',
        '',
        'Março de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Procedures SQL: executando código no MySQL',
        'tecnologia',
        14,
        'ALURA',
        '',
        'Março de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Administração do MySQL: segurança e otimização do banco',
        'tecnologia',
        16,
        'ALURA',
        '',
        'Março de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Java OO: Entendendo a Orientação a Objetos',
        'tecnologia',
        8,
        'ALURA',
        '',
        'Dezembro de 2020',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Java e java.lang: programe com a classe Object e String',
        'tecnologia',
        12,
        'ALURA',
        '',
        'Novembro de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Java JRE e JDK: compile e execute o seu programa',
        'tecnologia',
        8,
        'ALURA',
        '',
        'Novembro de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Certificação Java SE 7 Programmer I: criando e usando Arrays',
        'tecnologia',
        8,
        'ALURA',
        '',
        'Março de 2022',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Java Exceções: aprenda a criar, lançar e controlar exceções',
        'tecnologia',
        12,
        'ALURA',
        '',
        'Novembro de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'JavaScript: explorando a linguagem',
        'tecnologia',
        10,
        'ALURA',
        '',
        'Dezembro de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'JavaScript: Arrays',
        'tecnologia',
        10,
        'ALURA',
        '',
        'Dezembro de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'JavaScript: tipos, variáveis e funções',
        'tecnologia',
        12,
        'ALURA',
        '',
        'Dezembro de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'JAVASCRIPT: programando a orientação a objetos',
        'tecnologia',
        10,
        'ALURA',
        '',
        'Dezembro de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Rest com NodeJS: API com Express e MySQL',
        'tecnologia',
        8,
        'ALURA',
        '',
        'janeiro de 2022',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'HTML5 e CSS3 parte 1: crie uma página da Web',
        'tecnologia',
        8,
        'ALURA',
        '',
        'Abril de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'HTML5 e CSS3 parte 2: posicionamento, listas e navegação',
        'tecnologia',
        8,
        'ALURA',
        '',
        'Abril de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'HTML5 e CSS3 parte 3: trabalhando com formulários e tabelas',
        'tecnologia',
        8,
        'ALURA',
        '',
        'Abril de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'HTML5 e CSS3 parte 4: avançando no CSS',
        'tecnologia',
        8,
        'ALURA',
        '',
        'Abril de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'HTTP: Entendendo a web por baixo dos panos',
        'tecnologia',
        14,
        'ALURA',
        '',
        'Abril de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Flexbox: posicione elementos na tela',
        'tecnologia',
        9,
        'ALURA',
        '',
        'Abril de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'PHP: conceitos, lidando com dados, loops e mais',
        'tecnologia',
        6,
        'ALURA',
        '',
        'Março de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Avançando com PHP: Arrays, Strings, Função e Web',
        'tecnologia',
        8,
        'ALURA',
        '',
        'Março de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Orientação a Objetos com PHP: Classes, métodos e atributos',
        'tecnologia',
        8,
        'ALURA',
        '',
        'Março de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Avançando com Orientação a Objetos com PHP: Herança, Polimorfismo e Interfaces',
        'tecnologia',
        10,
        'ALURA',
        '',
        'Abril de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'PHP e MySQL: Criando uma webapp',
        'tecnologia',
        10,
        'ALURA',
        '',
        'Abril de 2021',
        'lightskyblue'
      )
    );

    this.courses.push(
      new Course(
        'Graduação',
        'Automação industrial',
        'eletroeletronica',
        2920,
        'UNIP Sorocaba/SP',
        'janeiro de 2014',
        'Julho de 2016',
        'lightsteelblue'
      )
    );

    this.courses.push(
      new Course(
        'Técnico',
        'Eletroeletrônica',
        'eletroeletronica',
        1500,
        'SENAI "Antônio Ermírio de Moraes"',
        'Janeiro de 2009',
        'Dezembro de 2010',
        'lightsteelblue'
      )
    );

    this.courses.push(
      new Course(
        'Aprendizagem Industrial',
        'Eletricista de Manutenção',
        'eletroeletronica',
        1600,
        'SENAI "Antônio Ermírio de Moraes"',
        'Janeiro de 2006',
        'Dezembro de 2007',
        'lightsteelblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'ETAP - Simulação em sistemas de potência',
        'eletroeletronica',
        40,
        'ETAP group of companies',
        'Outubro de 2017',
        'Outubro de 2017',
        'lightsteelblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'PowerLink 50/100W',
        'eletroeletronica',
        40,
        'SIEMENS',
        'Dezembro de 2014',
        'Dezembro de 2014',
        'lightsteelblue'
      )
    );

    this.courses.push(
      new Course(
        'Educação continuada',
        'Autocad 2D',
        'eletroeletronica',
        48,
        'SENAI "Antônio Ermírio de Moraes"',
        'Abril de 2011',
        'Maio de 2011',
        'lightsteelblue'
      )
    );

    this.filterCourses = this.courses;
  }

  getExperiences() {
    this.experiences.push(
      new Experience(
        'Instrutor de formação profissional III',
        'SENAI "Antônio Ermírio de Moraes"',
        'Abril de 2019',
        'Junho de 2022',
        'Desempenhando a função de docente em cursos técnicos, curso de aprendizagem industrial e cursos de formação continuada nas seguintes unidades curriculares',
        [
          'Desenvolvimento de sistemas web (Técnico em informática para internet)',
          'Testes de sistemas (Técnico em informática para internet)',
          'Implantação de sistemas (Técnico em informática para internet)',
          'Eletricidade geral',
          'Instalações elétricas prediais',
          'Sistemas eletroeletrônicos prediais',
          'Sistemas eletrônicos analógicos',
          'Sistemas eletrônicos digitais',
          'Matemática aplicada',
          'Desenho técnico',
          'Automação residencial e sistemas de segurança eletrônica',
          'NR10 - Segurança em instalações e serviços com eletricidade',
          'SEP - Segurança em sistema elétrico de potência',
        ],'lightsteelblue'
      )
    );

    this.experiences.push(
      new Experience(
        'Tecnico de Alta tensão Junior',
        'CBA - Companhia brasilera de alumínio',
        'Setembro de 2017',
        'Abril de 2019',
        'Desempenhando a função de técnico de alta tensão no setor GATR (Gerenciamento de alta tensão e retificação) nas subestações de entrada de energia elétrica da empresa CBA',
        [
          'Testes e configurações de relés de proteção de sobrecorrente, subtensão, sobretensão e diferencial',
          'Manutenção preventiva e corretiva em disjuntores, seccionadoras e transformadores de alta e média tensão',
          'Manutenção preventiva e corretiva em paineis de comando, proteção e medição de grandezas elétricas',
          'Testes e manutenção de sistema OPLAT - Ondas portadoras em linhas de alta tensão',
          'Manutenção e configuração de unidades de automação, comunicação e telecontrole em sistemas elétricos de potência',
          'Atualizações e modificações em sistemas de comando, proteção, controle e medição',
          'Desenvolvimento, atualização e treinamento de equipe em procedimentos operacionais',
          'Emissão de documentação de autorização de trabalho'

        ],'lightsteelblue'
      )
    );

    this.experiences.push(
      new Experience(
        'Eletricista de Alta tensão',
        'CBA - Companhia brasilera de alumínio',
        'Julho de 2013',
        'Setembro de 2017',
        'Desempenhando a função de Eletricista de alta tensão no setor GATR (Gerenciamento de alta tensão e retificação) nas subestações de entrada de energia elétrica da empresa CBA',
        [
          'Testes e configurações de relés de proteção de sobrecorrente, subtensão, sobretensão e diferencial',
          'Manutenção preventiva e corretiva em disjuntores, seccionadoras e transformadores de alta e média tensão',
          'Manutenção preventiva e corretiva em paineis de comando, proteção e medição de grandezas elétricas',
          'Testes e manutenção de sistema OPLAT - Ondas portadoras em linhas de alta tensão',
          'Manutenção e configuração de unidades de automação, comunicação e telecontrole em sistemas elétricos de potência',
          'Atualizações e modificações em sistemas de comando, proteção, controle e medição',

        ],'lightsteelblue'
      )
    );

    this.experiences.push(
      new Experience(
        'Instrumentista',
        'CBA - Companhia brasilera de alumínio',
        'Abril de 2012',
        'Julho de 2013',
        'Desempenhando a função de Instrumentista no setor da Alumina da empresa CBA',
        [
          'Testes e configurações de sensores de pressão, fluxo, nível, temperatura e condutividade',
          'Manutenção preventiva e corretiva em paineis de instrumentação',
          'Instalação de sensores e controladores',

        ],'lightsteelblue'
      )
    );
  }

  applyFilterCourses(event: any): void {
    if (event.value == 'todos') {
      this.filterCourses = this.courses;
    } else {
      this.filterCourses = this.courses.filter((course) => {
        return course.technologicalArea.includes(event.value);
      });
    }
  }
}
