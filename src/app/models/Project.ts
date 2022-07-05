export class Project{
  title:string;
  subtitle:string;
  description:string[];
  img:string;

  constructor(title:string, subtitle:string, description:string[], img:string){
    this.title = title;
    this.subtitle = subtitle;
    this.description = description;
    this.img = img
  }
}
