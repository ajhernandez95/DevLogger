import { Component, OnInit, Input } from '@angular/core';

import { Log } from '../../../models/log';
import { LogService } from '../../../services/log.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {
  logs: Log[];
  @Input() newLog: Log;

  constructor(private logService: LogService) {}

  ngOnInit() {
    this.logService.getLogs().subscribe(logs => {
      this.logs = logs.sort((a, b) => b.id - a.id);
    });
  }

  onAddLog(log) {
    this.logService.addLog(log).subscribe(log => {
      this.logs.unshift(log);
    });
  }

  removeLog(log): void {
    this.logs = this.logs.filter(curr => curr.id !== log.id);

    this.logService.deleteLog(log).subscribe();
  }
}
