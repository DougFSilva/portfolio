import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  listItem: string[] = ['home','portfolio','curriculo','sobremim'];
  listItemSelected: boolean[] = [false,false,false,false]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['sobremim']);
    this.listItemSelected = [true,false,false,false];
  }

  linkSelect(event: any): void {
    this.router.navigate([event.target.id]);
    let index = this.listItem.findIndex(element=> element == event.target.id);
    this.listItemSelected = [false, false, false, false]
    this.listItemSelected[index] = true
  }

  menuSelect(event: any): void {
    this.router.navigate([event.target.value]);
    let index = this.listItem.findIndex(element=> element == event.target.value);
    this.listItemSelected = [false, false, false, false]
    this.listItemSelected[index] = true
  }

}
