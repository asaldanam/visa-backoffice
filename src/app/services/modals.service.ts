import { Injectable } from '@angular/core';

@Injectable()
export class ModalsService {

  setDialogCancel:boolean         = false;
  setDialogVisa:boolean           = false;
  setDialogSave:boolean           = false;
  setDialogBreakdown:boolean      = false;
  setDialogCommunication:boolean  = false;

  constructor() { }

  openModal(modal) {
    if (modal == 'visa') {this.setDialogVisa = !this.setDialogVisa}
    if (modal == 'cancel') {this.setDialogCancel = !this.setDialogCancel}
    if (modal == 'save') {this.setDialogSave = !this.setDialogSave}
    if (modal == 'breakdown') {this.setDialogBreakdown = !this.setDialogBreakdown}
    if (modal == 'communication') {this.setDialogCommunication = !this.setDialogCommunication}
  }

}
