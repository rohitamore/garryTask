import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  Revolution= 0;
  interval: any;
  PopUP:  string = '';
  hideBar:boolean =true;
  
   OnCliksBar() {
    this.hideBar=true;
    this.Revolution = 0;
    this.interval = setInterval(() => {
      this.Revolution += 10;
      if (this.Revolution >= 100) {
        clearInterval(this.interval);
        this.ToseeToaster()
        this.hideBar = false;
      }
    }, 400);
  }
  ToseeToaster() {
    this.PopUP = "show";
    setTimeout(() => {
      this.PopUP = "";
    }, 2000);

  }
}
