// import { Component, OnInit } from '@angular/core';
// import Webcam from 'webcam-easy';
// import Webcam from 'webcam-easy'
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as faceapi from 'face-api.js';
@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit, AfterViewInit {
  // latest snapshot
  // public webcamImage: WebcamImage ;
  // // webcam snapshot trigger
  // private trigger: Subject<void> = new Subject<void>();
  // triggerSnapshot(): void {
  //  this.trigger.next();
  // }
  // handleImage(webcamImage: WebcamImage): void {
  //  console.info('received webcam image', webcamImage);
  //  this.webcamImage = webcamImage;
  // }
 
  // public get triggerObservable(): Observable<void> {
  //  return this.trigger.asObservable();
  // }

  // new code 

  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  async ngOnInit() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models');
    await faceapi.nets.faceExpressionNet.loadFromUri('/assets/models');
  }

  ngAfterViewInit() {
    this.startVideo();
  }

  startVideo() {
    navigator.mediaDevices.getUserMedia({ video: {} })
      .then(stream => this.video.nativeElement.srcObject = stream)
      .catch(err => console.error('Error accessing webcam: ', err));

    this.video.nativeElement.addEventListener('play', () => {
      const canvas = faceapi.createCanvasFromMedia(this.video.nativeElement);
      document.body.append(canvas);
      const displaySize = { width: this.video.nativeElement.width, height: this.video.nativeElement.height };
      faceapi.matchDimensions(canvas, displaySize);

      setInterval(async () => {
        const detections = await faceapi.detectAllFaces(this.video.nativeElement, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
        const resizedDetections = faceapi.resizeResults(detections, displaySize);
        var can = canvas.getContext('2d')
        can?.clearRect(0, 0, canvas.width, canvas.height);
        faceapi.draw.drawDetections(canvas, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
        faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
      }, 100);
    });
  }


}
