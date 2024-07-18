import { Component, Input, NgModule } from '@angular/core';
import { Carousel, CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { SafePipe } from '../pipes/safepipe';

// @NgModule({
//   imports: [Carousel],
// })
@Component({
  selector: 'app-video',
  standalone: true,
  // imports: [Carousel, ButtonModule],
  imports : [CommonModule, ButtonModule, CarouselModule,SafePipe],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  @Input() type : boolean = false ;
  motivaionalVideos = [
    { url: 'https://www.youtube.com/watch?v=n8FB0gQKRgQ', title: 'How To Live Life To The Fullest' },
    { url: 'https://www.youtube.com/watch?v=brjAjq4zEIE', title: '15-Minute Morning Yoga Full Body Stretch' }
  ];
  meditationVideos = [
    
    { url: 'https://www.youtube.com/watch?v=ijfLsKg8jFY', title: 'Om 108 Times - Music for Yoga & Meditation' },
    { url: 'https://www.youtube.com/watch?v=tF4z5kntXAA', title: 'Morning Flute Music' },
    { url: 'https://www.youtube.com/watch?v=tF4z5kntXAA', title: 'Krishna Flute' },
    { url: 'https://www.youtube.com/watch?v=ijfLsKg8jFY', title: 'Om 108 Times - Music for Yoga & Meditation' },
    { url: 'https://www.youtube.com/watch?v=tF4z5kntXAA', title: 'Morning Flute Music' },
    { url: 'https://www.youtube.com/watch?v=tF4z5kntXAA', title: 'Krishna Flute' },
    { url: 'https://www.youtube.com/watch?v=ijfLsKg8jFY', title: 'Om 108 Times - Music for Yoga & Meditation' },
    { url: 'https://www.youtube.com/watch?v=tF4z5kntXAA', title: 'Morning Flute Music' },
    { url: 'https://www.youtube.com/watch?v=tF4z5kntXAA', title: 'Krishna Flute' },
    // { url: 'assets/video2.mp4', title: 'Meditation4 Video' }
  ];

  // videoUrl: string = 'assets/sample-video.mp4'; // Replace with actual video URL
  videoUrl: string = 'https://www.youtube.com/watch?v=brjAjq4zEIE'; // Replace with actual video URL
  isVisible: boolean = false;
  title: string = 'Sample Video';


  getEmbedUrl(url : string  ): string {
    const videoId = this.extractVideoId(url);
    return `https://www.youtube.com/embed/${videoId}`;
  }


  private extractVideoId(url: string): string {
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/);
    return videoIdMatch ? videoIdMatch[1] : '';
  }
  // play(videoUrl: string, title: string): void {
play(){
    // this.videoUrl = videoUrl;
    // this.title = title;
    // this.isVisible = true;
    const videoPlayer = document.querySelector('video');
    if (videoPlayer) {
      videoPlayer.load();
      videoPlayer.play();
    }
  }

  stop(): void {
    // this.isVisible = false;
    const videoPlayer = document.querySelector('video');
    if (videoPlayer) {
      videoPlayer.pause();
      videoPlayer.currentTime = 0; // Reset the video to start
    }
  }
}
