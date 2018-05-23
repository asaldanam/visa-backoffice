import { Component, OnInit } from '@angular/core';
import { AgencyConfigService } from '../../../services/agency-config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  screenMode:string = 'signin'
  screenStatus:string = 'form';

  constructor(
    public _agencyConfig: AgencyConfigService
  ) { }


  tabBarStyles() {
    if (this.screenMode == 'signin') { return 'is-left '  + this._agencyConfig.userFrom; }
    if (this.screenMode == 'signup') { return 'is-right ' + this._agencyConfig.userFrom; }
    if (this.screenMode == 'none') { return 'is-disabled'; }
    else { return ; }
  }

  isActiveStyle(mode) {
    if (this.screenMode == mode) {
      return 'is-active ' + this._agencyConfig.userFrom;
    }
  }

  setView(mode, status) {
    this.screenMode = mode;
    this.screenStatus = status;
  }

  showView(mode, status) {
    if (this.screenMode == mode && this.screenStatus == status) {
      return true;
    }
    else {
      return false;
    }
  }

  ngOnInit() {
  }

}
