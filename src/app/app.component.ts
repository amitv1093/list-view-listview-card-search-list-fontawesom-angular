import { Component } from '@angular/core';
import {applicationData} from  './data';
import { faInfo,faComment,faChartBar,faCalendarAlt,faCircle,faCheck,faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'Angular';
  applicationData=applicationData;
    faInfo = faInfo;
    faComment = faComment;
    faChartBar = faChartBar;
    faCalendarAlt = faCalendarAlt;
    faCircle=faCircle;
    faCheck= faCheck;
    faHeart= faHeart;

   ngOnInit() {
    console.log(applicationData);
  }

}
