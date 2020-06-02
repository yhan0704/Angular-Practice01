import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  constructor() { }

  public toggle = true;
  public clickCount = 0;
  public arrays = [];

  showAndHide(){
    this.toggle = !this.toggle;
    this.clickCount += 1;
    let newDate = new Date();
    this.arrays.push(newDate);
    console.log(this.arrays);
  }

  ngOnInit(): void {
  }

}
