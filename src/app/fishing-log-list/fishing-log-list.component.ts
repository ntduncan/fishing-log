import { Component, OnInit } from '@angular/core';
import { FishingLogService } from '../fishing-log.service';
import { FishingLog } from '../fishing-log/FishingLog.model';

@Component({
  selector: 'app-fishing-log-list',
  templateUrl: './fishing-log-list.component.html',
  styleUrls: ['./fishing-log-list.component.css']
})
export class FishingLogListComponent implements OnInit {
  fishingLogs: FishingLog[] = [];

  constructor(private fishingLogService: FishingLogService) { }

  ngOnInit(): void {
    this.fishingLogs = this.fishingLogService.getFishingLogs();
  }

}
