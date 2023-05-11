import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!:string;

  constructor(private faceSnapsService: FaceSnapService){

  }

  ngOnInit(): void {
   this.buttonText='oh snap';
  }
onAddSnap(){
if(this.buttonText==='oh snap!'){
this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap') ; 
this.buttonText='unsnap!'

}else{
  this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap') ; 
  this.buttonText='oh snap!'

}
}

}
