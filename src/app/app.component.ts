import { Component, OnInit } from "@angular/core";

import * as moment from "moment-timezone";
/* 
  To ensure that your IDE or application doesn't throw issues you should install the Type definitions:
  @types/moment
  @types/moment-timezone
*/
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular";
  utcString = "2020-03-27 19:15:20+0000";
  localTimeStringMadrid = "";
  localTimeStringTenerife = "";

  utcString2 = "2020-03-30 19:15:20+0000";
  localTimeStringMadrid2 = "";
  localTimeStringTenerife2 = "";

  ngOnInit() {
    // console.log(moment.tz.names());
    this.localTimeStringMadrid = moment
      .tz(this.utcString, "Europe/Madrid")
      .format();
    this.localTimeStringTenerife = moment
      .tz(this.utcString, "Atlantic/Canary")
      .format();
    console.log("Server UTC Time", this.utcString);
    console.log("Server Madrid Time", this.localTimeStringMadrid);
    console.log("Server Tenerife Time", this.localTimeStringTenerife);

    console.log("*********************************");
    this.localTimeStringMadrid2 = moment
      .tz(this.utcString2, "Europe/Madrid")
      .format();
    this.localTimeStringTenerife2 = moment
      .tz(this.utcString2, "Atlantic/Canary")
      .format();
    console.log("Server UTC Time", this.utcString2);
    console.log("Server Madrid Time", this.localTimeStringMadrid2);
    console.log("Server Tenerife Time", this.localTimeStringTenerife2);
  }
}
