import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishingLogDetailComponent } from './fishing-log-detail.component';

describe('FishingLogDetailComponent', () => {
  let component: FishingLogDetailComponent;
  let fixture: ComponentFixture<FishingLogDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FishingLogDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FishingLogDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
