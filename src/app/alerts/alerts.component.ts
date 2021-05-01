import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mynews-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
  alertMessage;
  isDanger = false;
  isWarning = false;
  isInfo = false;
  isSuccess = false;

  constructor() { }
  
  /**
   * initalize component and print some logs
   * @method ngOnInit
   * @public
   */
  ngOnInit() {
    console.log("init alter component!")
    // this.resetActionStatus();
  }

  /**
   * Set alert level
   * @method alertActions
   * @param message 
   * @param alterActions 
   * @public 
   */
  public alertActions(message: string, alterActions: string) {
    this.alertMessage = message;
    if (alterActions.indexOf("success") >= 0) {
      console.log( "alter component success!")
      this.resetActionStatus();
      this.isSuccess = true;
    } else if (alterActions.indexOf("info") >= 0) {
      this.resetActionStatus();
      this.isInfo = true;
    } else if (alterActions.indexOf("danger") >= 0) {
      this.resetActionStatus();
      this.isDanger = true;
    } else if (alterActions.indexOf("warning") >= 0) {
      this.resetActionStatus();
      this.isWarning = true;
    } else {
      console.log("Please make sure the alertAction belong to (danger , warning, success, info)");
    }
  }

  /**
   * reset action status
   * @method resetActionStatus
   * @public
   */
  resetActionStatus() {
    this.isSuccess = false;
    this.isDanger = false;
    this.isInfo = false;
    this.isWarning = false;
  }
}
