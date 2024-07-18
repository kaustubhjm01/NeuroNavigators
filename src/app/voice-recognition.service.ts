import { Injectable, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {
  recognition: any;
  private isRecognizing: boolean = false;
  private synth: SpeechSynthesis;
  constructor(private zone: NgZone) {
    const { webkitSpeechRecognition }: IWindow = <IWindow><unknown>window;
    this.recognition = new webkitSpeechRecognition();
    this.recognition.lang = 'en-US';
    // this.recognition.lang = 'hi-IN';
    this.recognition.interimResults = false;
    this.recognition.maxAlternatives = 1;

    this.synth = window.speechSynthesis;

    this.recognition.onend = () => {
        this.isRecognizing = false;
      };
  }

  startListening(successCallback: (result: string) => void, errorCallback: (error: string) => void) {

    if (this.isRecognizing) {
        return;
      }
  
      this.isRecognizing = true;


    this.recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript.trim();
      successCallback(transcript);
    };

    this.recognition.onerror = (event: any) => {
      errorCallback(event.error);
    };

    this.recognition.start();
  }

  stopRecognition(): void {
     if (this.isRecognizing) {
      this.recognition.stop();
    }
  }

  speak(text: string, callback?: () => void) {
    const utterance = new SpeechSynthesisUtterance(text);
     if (callback) {
      utterance.onend = () => callback();
    }
    this.synth.speak(utterance);
  }
}

interface IWindow extends Window {
  webkitSpeechRecognition: any;
}
