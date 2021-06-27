import { Commodity } from './../model/commodity.model';
import { NotificationService } from './../notification/notification.service';
import { CommoditiesService } from './../services/commodities.service';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, mergeMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-submit-commodities',
  templateUrl: './submit-commodities.component.html',
  styleUrls: ['./submit-commodities.component.scss'],
})
export class SubmitCommoditiesComponent implements OnInit {
  isProcessing: boolean = false;

  commodity: Commodity;

  constructor(
    private commoditiesService: CommoditiesService,
    private toastService: NotificationService
  ) {
    this.commodity = new Commodity();
  }

  ngOnInit(): void {}

  validate(): boolean {
    let valid: boolean = true;
    if (!this.commodity.name) {
      this.showDanger('Please provide name of commodity');
      valid = false;
    }
    if (!this.commodity.count || this.commodity.count < 0) {
      this.showDanger('Please provide count of commodity');
      valid = false;
    }

    return valid;
  }

  submit(): void {
    if (!this.validate()) {
      return;
    }
    this.isProcessing = true;
    this.commoditiesService
          .submitCommodity(this.commodity)
          .subscribe((response) => {
            this.commodity = new Commodity();
            this.isProcessing = false;
            this.showSuccess();
          });
  }

  showDanger(dangerTpl: string) {
    this.toastService.show(dangerTpl, {
      classname: 'bg-danger text-light',
      delay: 15000,
    });
  }
  showSuccess() {
    this.toastService.show('Commodity registered successfully', {
      classname: 'bg-success text-light',
      delay: 10000,
    });
  }

}
