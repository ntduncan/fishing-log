import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FishingLog } from './fishing-log/FishingLog.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FishingLogService {
  private fishingLogs: FishingLog[] = [];
  public fishingLogsListChangedEvent = new Subject<FishingLog[]>();

  constructor(private http: HttpClient) { }

  getFishingLogs() {
    this.http
    .get("http://localhost:3000/catch/get-catches")
    .subscribe((fishingLogs: FishingLog[]) => {
      
      this.fishingLogs = fishingLogs;

      // this.maxId = this.getMaxId();

      // this.fishingLogs.sort((a, b)=> {
      //   return a.date > b.date ? 1: b.date > a.date ? -1 : 0;
      // })
      this.fishingLogsListChangedEvent.next(this.fishingLogs.slice());
    })
    return this.fishingLogs;
  }

  getFishingLog(id: Number){

  }

  addFishingLog(fishingLog: FishingLog){

  }

  deleteFishingLog(id: Number){

  }

  updateFishingLog(originalFishingLog: FishingLog, newFishingLog: FishingLog){

  }


}
