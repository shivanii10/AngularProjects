import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularTest';
  name="shivani";
  city="delhi";

  display()
  {
    console.log("this is display method, you clicked on the button");
    console.log(this.name)
  }
}
