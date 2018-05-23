import { Component, OnInit } from '@angular/core';
import { AgencyConfigService } from '../../services/agency-config.service';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {

  constructor(
    public _agencyConfig: AgencyConfigService,
    public _location: LocationService
  ) { }

  ngOnInit() {
  }

}
