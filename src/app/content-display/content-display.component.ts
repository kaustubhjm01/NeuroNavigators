// content-display.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { MoodDetectionService } from '../mood-detection.service';
import { MusicComponent } from '../music/music.component';

@Component({
  selector: 'app-content-display',
  templateUrl: './content-display.component.html',
  styleUrls: ['./content-display.component.css']
})
export class ContentDisplayComponent implements OnInit {
  mood: string;
  content: string;
  currentScore : number =0 
  showMusicPlayer: boolean = false; // Flag to show/hide music player
  showPhotos : boolean = false;
  showMeditationVideos : boolean = false;
  showMotivationalVideos : boolean = false ;
  photos :any  = [];
  videos : any = [];
  constructor(private moodDetectionService: MoodDetectionService) {}
  @ViewChild(MusicComponent) musicComponent: MusicComponent;
  
  ngOnInit(): void {
    this.updateContent("happy");
  }

  updateScore(score : number){
    this.currentScore +=score;
  }
  updateContent(mood : string ): void {
    // Mock data
    // const mockImageData = {}; // Replace with actual image data
    // this.mood = this.moodDetectionService.detectMood(mockImageData);


    // this.mood = 'bored';


    // this.mood = mood;
    // this.mood = 'angry'
    this.mood = 'neutral'
    // if(mood ==='happy'){
    //   this.showMusicPlayer =true;
    // }
    // else this.showMusicPlayer = false;

    // if(mood ==='neutral'){
    //   // this.showPhotos = true;
    //   this.mood = 'lonely'
    // }
    // this.mood = 'lonely'
    console.log('current mood is ', this.mood)
    this.content = this.getContentBasedOnMood(this.mood);
    this.performActionBasedOnMood()
  }

  getContentBasedOnMood(mood: string): string {
    const contentMap = {

      happy: 'Feeling Happy? Here is some awesome music for you!',
      neutral: 'Feeling lonely? Here are some memories of you with your friends and family. You can also try watching some YouTube videos',
      angry: 'Feeling Angry? Here is some relaxing content',
      bored: 'Feeling bored? Here is entertainment content'
      // happy: 'Playing happy song',
      // lonely: 'Showing family and friends photos',
      // angry: 'Showing meditation exercises and yoga videos',
      // bored: 'Showing entertainment videos or funny jokes'
    };
    return contentMap[mood as keyof typeof contentMap] || 'No content available';
  }

  toggleMusicPlayer(): void {
    this.showMusicPlayer = !this.showMusicPlayer;
  }

  performActionBasedOnMood(): void {
    switch (this.mood) {
      case 'happy':
        this.showMusicPlayer =true;
        this.showPhotos = false;
        this.showMotivationalVideos = false ;
        this.showMeditationVideos = false ;
        break;
      case 'neutral':
        // this.showFamilyPhotos();
        this.showMusicPlayer =false ;
        this.showPhotos = true;
        this.showMotivationalVideos = false ;
        this.showMeditationVideos = false ;
        this.photos = ['assets/images/fri1.jpg','assets/images/fri2.jpg', 'assets/images/fam1.jpg', 'assets/images/fri2.jpg']
        this.videos = [ { url: 'https://www.youtube.com/watch?v=TmxYlA26Jr4', title: 'Om 108 Times - Phir Hera Pheri' }, { url: 'https://www.youtube.com/watch?v=XaXKh-s9zws&t=1s', title: 'Golmaal ' },]
        break;
      case 'angry':
        // this.showMeditationExercises();
        this.showMusicPlayer =false;
        this.showPhotos = false;
        this.showMeditationVideos = true ;
        this.showMotivationalVideos = false ;
        this.photos = ['assets/images/yoga1.jpg','assets/images/yoga2.jpg','assets/images/yoga1.jpg']
        this.videos = [{ url: 'https://www.youtube.com/watch?v=brjAjq4zEIE', title: '15-Minute Morning Yoga Full Body Stretch' },{ url: 'https://www.youtube.com/watch?v=ijfLsKg8jFY', title: 'Om 108 Times - Music for Yoga & Meditation' } ]
        break;
      case 'bored':
        this.showMusicPlayer =false;
        this.showPhotos = false;
        this.showMeditationVideos = false ;
        this.showMotivationalVideos = true ;
        this.photos = ['assets/images/gym1.jpg','assets/images/gym2.jpg', 'assets/images/gym1.jpg']
        this.videos = [{ url: 'https://www.youtube.com/watch?v=XaXKh-s9zws&t=1s', title: '15-Minute Morning Yoga Full Body Stretch' },{ url: 'https://www.youtube.com/watch?v=iCtWBMzEGsU', title: 'Om 108 Times - Music for Yoga & Meditation' } ]
        // this.showEntertainmentVideos();
        break;
      default:
        console.log('No action defined for this mood.');
    }
  }

  // playHappySongs(): void {
  //   // Implement logic to play happy songs using Angular component interaction
  //   // For example, communicate with MusicComponent
  //   console.log(this.musicComponent)
  //   if (this.musicComponent) {
      
  //     this.musicComponent.playHappySongs();
  //   }
  // }

  // showFamilyPhotos(): void {
  //   // Implement logic to show family photos using Angular component interaction
  //   // For example, use ViewChild or @Output to interact with another component
  // }

  // showMeditationExercises(): void {
  //   // Implement logic to show meditation exercises and yoga videos
  //   // For example, use ViewChild or @Output to interact with another component
  // }

  // showEntertainmentVideos(): void {
  //   // Implement logic to show entertainment videos or funny jokes
  //   // For example, use ViewChild or @Output to interact with another component
  // }

}
