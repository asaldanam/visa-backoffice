import { Component, OnInit } from '@angular/core';

import { AgencyConfigService } from '../../services/agency-config.service';
import { TablesService } from '../../services/tables.service';
import { ModalsService } from '../../services/modals.service';

@Component({
  selector: 'app-visas',
  templateUrl: './visas.component.html',
  styleUrls: ['./visas.component.sass'],
  providers : [TablesService, ModalsService]
})
export class VisasComponent implements OnInit {

  loaded:boolean = false;

  constructor(
    public _agencyConfig: AgencyConfigService,
    public _tables: TablesService,
    public _modals: ModalsService
  ) { }

  ngOnInit() {
    setTimeout(
      ()=> {this.loaded = true;}, 1000
    );
    this._tables.tableHeader = "date";
    this._tables.tableHeaderSort = true;
  }

}
