import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FishingLogService } from '../fishing-log.service';
import { Fish } from '../fishing-log/Fish.model';
import { FishingLog } from '../fishing-log/FishingLog.model';

@Component({
  selector: 'app-fishing-log-edit',
  templateUrl: './fishing-log-edit.component.html',
  styleUrls: ['./fishing-log-edit.component.css']
})
export class FishingLogEditComponent implements OnInit {
  originalFishingLog: FishingLog;
  fishingLog: FishingLog;
  fishes: Fish[] = [];
  editMode: boolean = false;
  id: string = "";


  constructor(
    private fishingLogService: FishingLogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      if(id === undefined || id === null) return;

      this.originalFishingLog = this.fishingLogService.getFishingLog(id);
      if(!this.originalFishingLog) return;

      this.editMode = true;
      this.fishingLog = Object.assign({}, this.originalFishingLog)
      if(this.fishingLog.fish.length > 0) this.fishes = this.fishingLog.fish;
    })
  }

  onRemoveItem(index: number){
    if(index < 0 || index > this.fishes?.length){
      return;
    }
    this.fishes.splice(index, 1);
    
  }

  addToFishes(form: NgForm){
    if(form.value.species && form.value.length && form.value.bait){
      const addedFish: Fish = new Fish(form.value.species, form.value.length, form.value.bait);
      this.fishes.push(addedFish);
    }
    
  }


  onSubmit(form: NgForm) {
    const d = new Date(form.value.date);
    const date = d.toLocaleDateString();
    const fish = [new Fish(form.value.species, form.value.length, form.value.bait)]

    const id = (this.fishingLogService.getFishingLogs().length).toString()
    console.log(id)
    const newFishingLog = new FishingLog(id, form.value.location, form.value.image, date, fish)

    if (!this.editMode){
      this.fishingLogService.addFishingLog(newFishingLog);
    } else {
      this.fishingLogService.updateFishingLog(this.originalFishingLog, newFishingLog)
    }

    this.router.navigateByUrl('/');
  }

}
