import { Component, OnInit } from '@angular/core';
import { AgencyConfigService } from '../../../services/agency-config.service';
import { TablesService } from '../../../services/tables.service';
import { ModalsService } from '../../../services/modals.service';

@Component({
  selector: 'app-communications',
  templateUrl: './communications.component.html',
  styleUrls: ['./communications.component.sass'],
  providers : [TablesService, ModalsService]
})
export class CommunicationsComponent implements OnInit {

  newCom:boolean = false;

  constructor(
    public _agencyConfig: AgencyConfigService,
    public _tables: TablesService,
    public _modals: ModalsService
  ) { }

  setNewCom() {
    this.newCom = !this.newCom;
  }

  ngOnInit() {
  }

}
