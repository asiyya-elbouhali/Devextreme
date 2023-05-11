import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapService {
   faceSnaps: FaceSnap[]=[
        {
          id: 1,
          title: 'Archibald',
          description:'Mon meilleur ami depuis tout petit',
          imageUrl:'https://jai-un-pote-dans-la.com/wp-content/uploads/2022/06/jupdlc-fleche-grise-snap.jpg',
          createdDate:new Date(),
          snaps: 8,
          location:'Paris'
        },
        {
          id: 2,
          title:'Three Rock Mountain',
          description:'Un endroit magnifique pour les randonnées.',
          imageUrl:'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
          createdDate:new Date(),
          snaps: 8,
          location:'la montagne'
    
        },
        {
          id: 3,
          title:'Un bon repas',
          description:'C\'est trop bon!',
          imageUrl:'https://reussirmesetudes.fr/wp-content/uploads/2012/01/salmon-dish-food-meal-46239.jpeg',
          createdDate:new Date(),
          snaps:8
        },
        {
          id: 4,
          title: 'Archibald',
          description:'Mon meilleur ami depuis tout petit',
          imageUrl:'https://jai-un-pote-dans-la.com/wp-content/uploads/2022/06/jupdlc-fleche-grise-snap.jpg',
          createdDate:new Date(),
          snaps: 8,
          location:'Paris'
        },
        {
          id: 5,            
          title:'Three Rock Mountain',
          description:'Un endroit magnifique pour les randonnées.',
          imageUrl:'https://upload.wikimedia.org/wikipedia/commons/0/08/Three_Rock_Mountain_Southern_Tor.jpg',
          createdDate:new Date(),
          snaps:8,
          location:'la montagne'
    
        },
        {
          id: 6,
          title:'Un bon repas',
          description:'C\'est trop bon!',
          imageUrl:'https://reussirmesetudes.fr/wp-content/uploads/2012/01/salmon-dish-food-meal-46239.jpeg',
          createdDate:new Date(),
          snaps: 8
        }
      ];


      getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps;
      }
      
      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
     if(!faceSnap){
      throw new Error ('FaceSnap not found!');
    }else {
      return faceSnap;
     }
    }

    snapFaceSnapById(faceSnapId: number,snapType:'snap'|'unsnap'): void {
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === 'snap' ? faceSnap.snaps++: faceSnap.snaps--;
  }

}