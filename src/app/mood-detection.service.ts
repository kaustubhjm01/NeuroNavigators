// mood-detection.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoodDetectionService {
  detectMood(imageData: any): string {
    // Mock mood detection logic
    const moods = ['happy', 'lonely', 'weak', 'bored'];
    return moods[Math.floor(Math.random() * moods.length)];
  }
}
