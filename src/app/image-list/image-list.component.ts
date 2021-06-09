import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  Image: any = [];
  selectedImage: any = null

  constructor(private apiService: ApiService) { 
    this.readImage();
  }

  selectImage(Image) {
    this.selectedImage = Image;
    console.log(this.selectedImage);
  }

  ngOnInit() {}

  readImage(){
    this.apiService.getImages().subscribe((data) => {
     this.Image = data;
    })    
  }

  removeImage(image, index) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteImage(image._id).subscribe((data) => {
          this.Image.splice(index, 1);
        }
      )    
    }
  }

}

