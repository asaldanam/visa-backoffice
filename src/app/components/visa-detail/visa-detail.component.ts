import { Component, OnInit } from '@angular/core';

import { AgencyConfigService } from '../../services/agency-config.service';
import { TablesService } from '../../services/tables.service';
import { ModalsService } from '../../services/modals.service';
import { LocationService } from '../../services/location.service';


@Component({
  selector: 'app-visa-detail',
  templateUrl: './visa-detail.component.html',
  styleUrls: ['./visa-detail.component.sass'],
  providers : [TablesService, ModalsService]
})
export class VisaDetailComponent implements OnInit {

  loaded:boolean = false;
  newCom:boolean = false;

  constructor(
    public _agencyConfig: AgencyConfigService,
    public _tables: TablesService,
    public _modals: ModalsService,
    public _location: LocationService
  ) { }

  setNewCom() {
    this.newCom = !this.newCom;
  }

  ngOnInit() {
    setTimeout(
      ()=> {this.loaded = true;}, 1000
    );
    this._tables.tableHeader = "date";
    this._tables.tableHeaderSort = true;
  }

}
