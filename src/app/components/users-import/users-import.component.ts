import { Component, OnInit } from '@angular/core';
import { AgencyConfigService } from '../../services/agency-config.service';


@Component({
  selector: 'app-users-import',
  templateUrl: './users-import.component.html',
  styleUrls: ['./users-import.component.sass']
})
export class UsersImportComponent implements OnInit {

  constructor(
    public _agencyConfig: AgencyConfigService
  ) { }

  ngOnInit() {
  }

}
