// content-display.component.ts
import { Component, OnInit } from '@angular/core';
import { MoodDetectionService } from '../mood-detection.service';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent implements OnInit {
  mood: string;
  content: string;

  constructor(private moodDetectionService: MoodDetectionService) {}

  ngOnInit(): void {
    this.updateContent();
  }

  updateContent(): void {
    // Mock data
    const mockImageData = {}; // Replace with actual image data
    this.mood = this.moodDetectionService.detectMood(mockImageData);
    this.content = this.getContentBasedOnMood(this.mood);
  }

  getContentBasedOnMood(mood: string): string {
    const contentMap = {
      happy: 'Playing happy song',
      lonely: 'Showing family and friends photos',
      weak: 'Showing yoga/workout videos',
      bored: 'Playing happy songs'
    };
    return contentMap[mood as keyof typeof contentMap] || 'No content available';
  }
}
