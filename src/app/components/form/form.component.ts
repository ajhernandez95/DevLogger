import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LogService } from '../../services/log.service';
import { Log } from '../../models/log';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() logAdded: EventEmitter<Log> = new EventEmitter();
  log: Log = {
    id: null,
    title: '',
    body: '',
    date: Date.now()
  };
  constructor() {}

  ngOnInit() {}

  submitLog(): void {
    this.logAdded.emit(this.log);
  }
}
