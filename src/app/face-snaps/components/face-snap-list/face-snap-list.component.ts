import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subject, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps$!: Observable<FaceSnap[]>;
  private destroy$!: Subject<boolean>;
  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    //this.destroy$ = new Subject<boolean>();
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

    //  interval(1000).pipe(takeUntil(this.destroy$), tap(console.log)).subscribe();
  }
  /*
  ngOnDestroy() {
    this.destroy$.next(true);
  }*/
}
