import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-image-cropper',
  templateUrl: './image-cropper.component.html',
  styleUrls: ['./image-cropper.component.css']
})
export class ImageCropperComponent {

	fileUrl;
	crop1;
	crop2;
	crop3;
	crop4;
	constructor(private http: HttpClient) {}

	onSelectFile(event) {
		if (event.target['files'] && event.target['files'][0]) {
			var reader = new FileReader();
			reader.readAsDataURL(event.target['files'][0]); // read file as data url
			reader.onload = (event) => {
				this.fileUrl = event.target['result'];
				var imgObject = new Image();
				imgObject.src = this.fileUrl;
				imgObject.onload = (imageEvent) =>{
					this.bufferCanvas(imgObject);
				}
			}	
		}
	}

	// Kept on hold owing to API experiencing issues at the time of development
	viewOnImgur(imageBase64) {
		let base64ContentArray = imageBase64.split(",") 
		// base64 content cannot contain whitespaces but nevertheless skip if there are!
		let mimeType = base64ContentArray[0].match(/[^:\s*]\w+\/[\w-+\d.]+(?=[;| ])/)[0]

		var blob = new Blob([imageBase64], {type: mimeType});
		const headers = { 'Authorization': 'Client-ID 6272ea6b290ade8' }
		
		const formData = new FormData();
    	formData.append('image', blob);
    	formData.append('title', 'test');
    	formData.append('type', 'base64');
    	
    	formData.append('name', 'practice image');
    	this.http.post("https://api.imgur.com/3/image",formData,{ headers }).subscribe(response =>{
			console.log(response);
		},error =>{
			console.log("upload error ", error);
		});
	}

	bufferCanvas(image) {
		var bufferCanvas = document.createElement('canvas');
		var bufferContext = bufferCanvas.getContext('2d');
		bufferCanvas.width = image.width;
		bufferCanvas.height = image.height;
		bufferContext.drawImage(image, 0, 0);
		this.cr1(bufferCanvas);
		this.cr2(bufferCanvas);
		this.cr3(bufferCanvas);
		this.cr4(bufferCanvas);
	}

	cr1(bufferCanvas) {
		var tnCanvas = document.createElement('canvas');
 		var tnCanvasContext = tnCanvas.getContext('2d');
 		tnCanvas.width = 504; tnCanvas.height = 700;

 		// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
 		tnCanvasContext.drawImage(bufferCanvas, 0, 0, 755, 450 ,0,0,755,450);
 		this.crop1 = tnCanvas.toDataURL();	
	}

	cr2(bufferCanvas) {
		var tnCanvas = document.createElement('canvas');
 		var tnCanvasContext = tnCanvas.getContext('2d');
 		tnCanvas.width = 504; tnCanvas.height = 700;

 		// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
 		tnCanvasContext.drawImage(bufferCanvas, 0, 0, 365, 450 ,0,0,365,450);
 		this.crop2 = tnCanvas.toDataURL();	
	}

	cr3(bufferCanvas) {
		var tnCanvas = document.createElement('canvas');
 		var tnCanvasContext = tnCanvas.getContext('2d');
 		tnCanvas.width = 504; tnCanvas.height = 700;

 		// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
 		tnCanvasContext.drawImage(bufferCanvas, 0, 0, 365, 212 ,0,0,365,212);
 		this.crop3 = tnCanvas.toDataURL();	
	}

	cr4(bufferCanvas) {
		var tnCanvas = document.createElement('canvas');
 		var tnCanvasContext = tnCanvas.getContext('2d');
 		tnCanvas.width = 504; tnCanvas.height = 700;

 		// drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
 		tnCanvasContext.drawImage(bufferCanvas, 0, 0, 380, 380 ,0,0,380,380);
 		this.crop4 = tnCanvas.toDataURL();	
	}
}
