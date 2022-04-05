import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FishingLog } from './fishing-log/FishingLog.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FishingLogService {
  private fishingLogs: FishingLog [] = [];
  public fishingLogsListChangedEvent = new Subject<FishingLog[]>();

  constructor(private http: HttpClient) { }
  
      /**************************
     * CREATE
     */
    addFishingLog(newFishingLog: FishingLog){
  
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
      this.http.post<{fishingLog: FishingLog}>("http://localhost:3000/catch", 
      newFishingLog, {headers: headers})
      .subscribe(
        (responseData: {fishingLog: FishingLog}) => {
          this.fishingLogs.push(responseData.fishingLog);
          console.log(this.fishingLogs)
          this.fishingLogsListChangedEvent.next(this.fishingLogs.slice())
        });
    }

  /**************************
   * READ
   */
  getFishingLogs() {
    this.http
    .get("http://localhost:3000/catch")
    .subscribe((fishingLogs: any) => {
      this.fishingLogs = fishingLogs;
      this.fishingLogsListChangedEvent.next(this.fishingLogs.slice());
      console.log(this.fishingLogs)
    })
    return this.fishingLogs;
  }

  getFishingLog(id: string){
    const fishingLog = this.fishingLogs.find(fishingLog => fishingLog.id === id)
     return fishingLog !== undefined ? fishingLog : null;
  }

  
  /**************************
   * UPDATE
   */
  updateFishingLog(originalFishingLog: FishingLog, newFishingLog: FishingLog){
    if(!originalFishingLog || !newFishingLog) return;

    const pos = this.fishingLogs.indexOf(originalFishingLog);
    if(pos < 0) return; //Null check

    newFishingLog.id = originalFishingLog.id;
    // newContact._id = originalContact._id;
    this.fishingLogs[pos] = newFishingLog;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.http.put('http://localhost:3000/catch/' + originalFishingLog.id,
      newFishingLog, { headers: headers })
      .subscribe(
        (response: any) => {
          this.fishingLogs[pos] = newFishingLog;
          // this.sortAndSend();
          this.fishingLogsListChangedEvent.next(this.fishingLogs.slice());
        }
      );

  }
  
  /**************************
 * DELETE
 */
deleteFishingLog(fishingLog: FishingLog){
  if (!fishingLog) {
    return;
  }

  const pos = this.fishingLogs.findIndex(d => d.id === fishingLog.id);

  if (pos < 0) {
    return;
  }

  // delete from database
  this.http.delete('http://localhost:3000/catch/' + fishingLog.id)
    .subscribe(
      (response: any) => {
        this.fishingLogs.splice(pos, 1);
        // this.sortAndSend();
        this.fishingLogsListChangedEvent.next(this.fishingLogs.slice());
      }
    );
}

}
