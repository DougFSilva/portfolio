export class Course{
  modality:string;
  title:string;
  technologicalArea:string;
  ch:number;
  school:string;
  initialDate:string;
  conclusionDate:string;
  cardColor:string

  constructor(modality:string, title:string, technologicalArea:string, ch:number, school:string,
    initialDate:string, conclusionDate:string, cardColor:string){
      this.modality = modality;
      this.title = title;
      this.technologicalArea = technologicalArea;
      this.ch = ch;
      this.school = school;
      this.initialDate = initialDate;
      this.conclusionDate = conclusionDate;
      this.cardColor = cardColor;
    }
}
