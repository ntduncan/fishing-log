import { Component, OnInit, OnDestroy } from '@angular/core';
import { FishingLogService } from '../fishing-log.service';
import { FishingLog } from '../fishing-log/FishingLog.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-fishing-log-list',
  templateUrl: './fishing-log-list.component.html',
  styleUrls: ['./fishing-log-list.component.css'],
})
export class FishingLogListComponent implements OnInit {
  fishingLogs: FishingLog[] = [];
  subscription: Subscription = new Subscription();

  constructor(private fishingLogService: FishingLogService) {}

  ngOnInit(): void {
    this.fishingLogs = this.fishingLogService.getFishingLogs();
    this.subscription = this.fishingLogService.fishingLogsListChangedEvent.subscribe(
      (fishinglogs: FishingLog[]) => {
        this.fishingLogs = fishinglogs;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
