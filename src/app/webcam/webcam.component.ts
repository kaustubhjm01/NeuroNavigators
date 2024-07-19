// // import { Component, OnInit } from '@angular/core';
// // import Webcam from 'webcam-easy';
// // import Webcam from 'webcam-easy'
// import {WebcamImage} from 'ngx-webcam';
// import {Subject, Observable} from 'rxjs';
// import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
// import * as faceapi from 'face-api.js';
// import { ContentDisplayComponent } from '../content-display/content-display.component';
// @Component({
//   selector: 'app-webcam',
//   templateUrl: './webcam.component.html',
//   styleUrls: ['./webcam.component.css']
// })
// export class WebcamComponent implements OnInit, AfterViewInit {
//   // latest snapshot
//   // public webcamImage: WebcamImage ;
//   // // webcam snapshot trigger
//   // private trigger: Subject<void> = new Subject<void>();
//   // triggerSnapshot(): void {
//   //  this.trigger.next();
//   // }
//   // handleImage(webcamImage: WebcamImage): void {
//   //  console.info('received webcam image', webcamImage);
//   //  this.webcamImage = webcamImage;
//   // }
 
//   // public get triggerObservable(): Observable<void> {
//   //  return this.trigger.asObservable();
//   // }

//   // new code 

//   @ViewChild('video') video: ElementRef<HTMLVideoElement>;
//   @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

//   @Output() moodEvent = new EventEmitter<string>();
//    contentDisplay : ContentDisplayComponent ;
//    moodQueue: string[] = []; // Queue to store last 100 moods

//    selectedDeviceId: string = '';
//   async ngOnInit() {
//     await faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models');
//     await faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models');
//     await faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models');
//     await faceapi.nets.faceExpressionNet.loadFromUri('/assets/models');

//     this.listVideoInputDevices()
//   }

//   async listVideoInputDevices() {
//     const devices = await navigator.mediaDevices.enumerateDevices();
//     const videoDevices = devices.filter(device => device.kind === 'videoinput');
    
//     // Log available video devices
//     console.log('Available video devices:', videoDevices);

//     if (videoDevices.length > 0) {
//       this.selectedDeviceId = videoDevices[1].deviceId; // Default to first device
//     }

//     // Optional: Implement a UI to allow users to select a different camera
//   }

//   ngAfterViewInit() {
//   //   this.stream.getTracks().forEach(t => {
//   //     t.stop();
//   //     this.stream.removeTrack(t);
//   //  });
//     this.startVideo();
//   }

//   // startVideo() {
//   //   navigator.mediaDevices.getUserMedia({ video: {} })
//   //     .then(stream => this.video.nativeElement.srcObject = stream)
//   //     .catch(err => console.error('Error accessing webcam: ', err));

//   //   this.video.nativeElement.addEventListener('play', () => {
//   //     const canvas = faceapi.createCanvasFromMedia(this.video.nativeElement);
//   //     document.body.append(canvas);
//   //     const displaySize = { width: this.video.nativeElement.width, height: this.video.nativeElement.height };
//   //     faceapi.matchDimensions(canvas, displaySize);

//   //     setInterval(async () => {
//   //       const detections = await faceapi.detectAllFaces(this.video.nativeElement, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
//   //       const resizedDetections = faceapi.resizeResults(detections, displaySize);

        
//   //       // console.log('detection is ', detections)
//   //       // console.log('detectiong are ', resizedDetections)
//   //   //     const mockImageData = {}; // Replace with actual image data
//   //   // this.mood = this.moodDetectionService.detectMood(mockImageData);
//   //       var can = canvas.getContext('2d')
//   //       can?.clearRect(0, 0, canvas.width, canvas.height);
//   //       faceapi.draw.drawDetections(canvas, resizedDetections);
//   //       faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
//   //       faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
//   //     }, 100);
//   //   });
//   // }

//   startVideo() {
//     navigator.mediaDevices.getUserMedia({ 
//       video: {}
//     // video : true 
//     })
//       .then(stream => this.video.nativeElement.srcObject = stream)
//       .catch(err => console.error('Error accessing webcam: ', err));
  
//     this.video.nativeElement.addEventListener('play', () => {
//       const canvas = faceapi.createCanvasFromMedia(this.video.nativeElement);
//       document.body.append(canvas);
//       const displaySize = { width: this.video.nativeElement.width, height: this.video.nativeElement.height };
//       faceapi.matchDimensions(canvas, displaySize);
  
//       setInterval(async () => {
//         const detections = await faceapi.detectAllFaces(this.video.nativeElement, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
//         const resizedDetections = faceapi.resizeResults(detections, displaySize);
  
//         if (resizedDetections.length > 0) {
//           const expressions = resizedDetections[0].expressions;
//           let maxConfidence = 0;
//           let detectedMood = '';
  
//           // Iterate over all expressions to find the one with maximum confidence
//           Object.keys(expressions).forEach(expression => {
//             if (expressions[expression] > maxConfidence) {
//               maxConfidence = expressions[expression];
//               detectedMood = expression;
//             }
//           });

//           // detectedMood = this.getMostFrequentMood()
  
//           // console.log('Detected mood:', detectedMood);
//           // this.contentDisplay.mood = detectedMood;

//           this.moodEvent.emit(detectedMood);

//           this.updateMoodQueue(detectedMood);
//           // Here you can send the detectedMood to another function or service
//           // Example:
//           // this.sendMood(detectedMood);
  
//           // Clear canvas before redrawing
//           // var can = canvas.getContext('2d');
//           // can?.clearRect(0, 0, canvas.width, canvas.height);
//           // faceapi.draw.drawDetections(canvas, resizedDetections);
//           // faceapi.draw.drawFaceLandmarks(canvas, resizedDetections);
//           // faceapi.draw.drawFaceExpressions(canvas, resizedDetections);
//         }
//       }, 100);
//     });
//   }

//   updateMoodQueue(mood: string) {
//     // Add mood to the front of the queue
//     this.moodQueue.unshift(mood);

//     // Trim queue to keep only the last 100 moods
//     if (this.moodQueue.length > 10) {
//       this.moodQueue.pop(); // Remove the oldest mood from the end of the queue
//     }

//     // Determine the most frequent mood in the queue
//     const mostFrequentMood = this.getMostFrequentMood();
//     console.log('Most frequent mood:', mostFrequentMood);
//     // this.contentDisplay.mood = mostFrequentMood; // Set the mood in content display component
//   }

//   getMostFrequentMood(): string {
//     if (this.moodQueue.length === 0) {
//       return '';
//     }

//     const frequencyMap = {};
//     let maxFrequency = 0;
//     let mostFrequentMood = '';

//     // Count frequencies of each mood in the queue
//     this.moodQueue.forEach(mood => {
//       frequencyMap[mood] = (frequencyMap[mood] || 0) + 1;
//       if (frequencyMap[mood] > maxFrequency) {
//         maxFrequency = frequencyMap[mood];
//         mostFrequentMood = mood;
//       }
//     });

//     return mostFrequentMood;
//   }
  

// }


import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import * as faceapi from 'face-api.js';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit, AfterViewInit {
  @ViewChild('video') video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  @Output() moodEvent = new EventEmitter<string>();
  moodQueue: string[] = [];
  selectedDeviceId: string = '';
  videoDevices: MediaDeviceInfo[] = [];

  async ngOnInit() {
    await faceapi.nets.tinyFaceDetector.loadFromUri('/assets/models');
    await faceapi.nets.faceLandmark68Net.loadFromUri('/assets/models');
    await faceapi.nets.faceRecognitionNet.loadFromUri('/assets/models');
    await faceapi.nets.faceExpressionNet.loadFromUri('/assets/models');

    await this.listVideoInputDevices();
  }

  ngAfterViewInit() {
    this.startVideo();
  }

  async listVideoInputDevices() {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      this.videoDevices = devices.filter(device => device.kind === 'videoinput');
      
      if (this.videoDevices.length > 0) {
        this.selectedDeviceId = this.videoDevices[0].deviceId; // Default to first device
      } else {
        console.error('No video input devices found');
      }
    } catch (error) {
      console.error('Error listing video input devices: ', error);
    }
  }

  startVideo() {
    if (this.selectedDeviceId) {
      navigator.mediaDevices.getUserMedia({ video: { deviceId: { exact: this.selectedDeviceId } } })
        .then(stream => {
          this.video.nativeElement.srcObject = stream;
          this.video.nativeElement.addEventListener('play', () => this.onPlay());
        })
        .catch(err => console.error('Error accessing webcam: ', err));
    } else {
      console.error('No video device selected');
    }
  }

  onPlay() {
    const canvas = faceapi.createCanvasFromMedia(this.video.nativeElement);
    document.body.append(canvas);
    const displaySize = { width: this.video.nativeElement.width, height: this.video.nativeElement.height };
    faceapi.matchDimensions(canvas, displaySize);

    setInterval(async () => {
      const detections = await faceapi.detectAllFaces(this.video.nativeElement, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();
      const resizedDetections = faceapi.resizeResults(detections, displaySize);

      if (resizedDetections.length > 0) {
        const expressions = resizedDetections[0].expressions;
        let maxConfidence = 0;
        let detectedMood = '';

        Object.keys(expressions).forEach(expression => {
          if (expressions[expression] > maxConfidence) {
            maxConfidence = expressions[expression];
            detectedMood = expression;
          }
        });

        this.moodEvent.emit(detectedMood);
        this.updateMoodQueue(detectedMood);
      }
    }, 100);
  }

  updateMoodQueue(mood: string) {
    this.moodQueue.unshift(mood);
    if (this.moodQueue.length > 10) {
      this.moodQueue.pop();
    }
    const mostFrequentMood = this.getMostFrequentMood();
    console.log('Most frequent mood:', mostFrequentMood);
  }

  getMostFrequentMood(): string {
    if (this.moodQueue.length === 0) {
      return '';
    }

    const frequencyMap = {};
    let maxFrequency = 0;
    let mostFrequentMood = '';

    this.moodQueue.forEach(mood => {
      frequencyMap[mood] = (frequencyMap[mood] || 0) + 1;
      if (frequencyMap[mood] > maxFrequency) {
        maxFrequency = frequencyMap[mood];
        mostFrequentMood = mood;
      }
    });

    return mostFrequentMood;
  }

  onCameraChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedDeviceId = selectElement.value;
    this.startVideo();
  }
}
