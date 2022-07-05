export class Experience {
  role: string;
  company: string;
  initialDate: string;
  finalDate: string;
  activities: string;
  activitiesList: string[];
  cardColor: string;

  constructor(
    role: string,
    company: string,
    initialDate: string,
    finalDate: string,
    activities: string,
    activitiesList: string[],
    cardColor: string
  ) {
    this.role = role;
    this.company = company;
    this.initialDate = initialDate;
    this.finalDate = finalDate;
    this.activities = activities;
    this.activitiesList = activitiesList;
    this.cardColor = cardColor
  }
}
