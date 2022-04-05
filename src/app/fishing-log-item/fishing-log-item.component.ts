import { Component, Input, OnInit } from '@angular/core';
import { FishingLogService } from '../fishing-log.service';
import { FishingLog } from '../fishing-log/FishingLog.model';

@Component({
  selector: 'app-fishing-log-item',
  templateUrl: './fishing-log-item.component.html',
  styleUrls: ['./fishing-log-item.component.css']
})
export class FishingLogItemComponent implements OnInit {
  @Input() fishingLog!: FishingLog;

  constructor(private fishingLogService: FishingLogService) { }

  ngOnInit(): void {
  }

  onDelete() {
    console.log("delte called")
    this.fishingLogService.deleteFishingLog(this.fishingLog)
  }

}
