import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
public randomTimeArray: any = [] ;
public hours: any = [];
public zikr: any = [];
public scheduleNotification: any = [];
  constructor(public navCtrl: NavController) {
    this.zikr = ['zikr1', 'zikr2', 'zikr3', 'zikr4', 'zikr5', 'zikr6'] 
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
    this.zikr = this.shuffle(this.zikr);
    while( i < 5){
        this.randomTimeArray.push(
          new Date(year, month, day, shuffledArray[i], 0, 0, 0)
        )
        i++;
    }
    this.scheduleNotificationFn();
    }

    scheduleNotificationFn(){
      this.randomTimeArray.forEach((element, index) => {
        this.scheduleNotification.push({
          id: index,
          title: 'Zikr',
          text: this.zikr[index],
          firstAt: new Date(element),
          every: 24*60
          // data: {"id": 1, "name": "Mr. A"}
        })
      });
      console.log(this.scheduleNotification);
       // cal here schedule notification function like this
      //  this.localNotifications.schedule(this.scheduleNotification);   <---- like this
    }

  }
