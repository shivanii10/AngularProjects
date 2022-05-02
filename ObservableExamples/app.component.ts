import { Component } from '@angular/core';

import {Observable} from 'rxjs';



@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'ObservervableExample';

  observer: any;

  constructor() { }
  ngOnInit() {

     

        // Create a new Observable

        const sqnc = new Observable(countOnetoTen);

     

        // Execute the Observable and print the

        // result of each notification

        // next() is a call to countOnetoTen method

        // to get the next value from the observable

        sqnc.subscribe({

            next(num) {

              console.log(num);

            },

           

            complete(){console.log("Completed!!!!")}

           

        });

     

        // is called

        function countOnetoTen(observer:any) {

             

            for(var i = 1; i <= 10; i++) {

                 

                // Calls the next observable

                // notification

                observer.next(i);

            }

           observer.complete();

            // Unsubscribe after completing

            // the sequence

            return {unsubscribe(){}};

        }

    }

}