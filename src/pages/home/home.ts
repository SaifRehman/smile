import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public randomTimeArray: any = [] ;
public hours: any = [];
  constructor(public navCtrl: NavController) {
    for (let i =0 ; i<24 ; i++){
      this.hours.push(i);
    }
    this.getRandomTime();
  }

  shuffle(array) {
    var i = array.length,
        j = 0,
        temp;

    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
  getRandomTime(){
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let day = new Date().getDate();
    var i = 0;
    let shuffledArray = this.shuffle(this.hours);
    while( i < 5){
        this.randomTimeArray.push(
          new Date(year, month, day, shuffledArray[i], 0, 0, 0)
        )
        i++;
    }
    console.log(this.randomTimeArray)
    }
  }
