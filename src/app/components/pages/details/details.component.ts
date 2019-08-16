import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { LogService } from '../../../services/log.service';
import { Log } from '../../../models/log';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number = +this.route.snapshot.paramMap.get('id');
  log: Log = {
    id: null,
    title: '',
    body: '',
    date: null
  };
  isEditState: boolean = false;
  constructor(
    private logService: LogService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.logService.getLog(this.id).subscribe(log => (this.log = log));
  }

  edit(): void {
    this.isEditState = !this.isEditState;
  }

  update(): void {
    console.log(this.log);
    this.logService.updateLog(this.log).subscribe();

    this.isEditState = !this.isEditState;
  }

  goBack(): void {
    this.location.back();
  }
}
