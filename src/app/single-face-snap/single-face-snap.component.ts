import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {

    faceSnap!: FaceSnap;

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!:string;

  constructor(private faceSnapsService: FaceSnapService,
              private route:ActivatedRoute
    ){

  }

  ngOnInit(): void {
   this.buttonText='oh snap';
   const faceSnapId= +this.route.snapshot.params['id'];
   this.faceSnap=this.faceSnapsService.getFaceSnapById(faceSnapId);
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
