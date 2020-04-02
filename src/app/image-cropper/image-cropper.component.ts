import { Component } from '@angular/core';

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
	constructor() {}

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

	viewOnImgur(imageBase64) {
		console.log(imageBase64);
		var blob = new Blob([imageBase64], {type: 'image/png'});
		var file = new File([blob], 'imageFileName.png');
		console.log(file);
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
