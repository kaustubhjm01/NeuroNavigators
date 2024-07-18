import { Component } from '@angular/core';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
  audioTitle : string = "On my way" ;
  thumbnailUrl = "assets/images/onmyway.jpg"
  playHappySongs(): void {
    // Implement logic to play happy songs
    console.log('Playing happy songs...');
  }

  play(): void {
    const audioPlayer = this.getAudioPlayer();
    if (audioPlayer) {
      audioPlayer.play();
    }
  }

  stop(): void {
    const audioPlayer = this.getAudioPlayer();
    if (audioPlayer) {
      audioPlayer.pause();
      // audioPlayer.currentTime = 0;
    }
  }

  private getAudioPlayer(): HTMLAudioElement | null {
    const audioPlayer = document.querySelector('audio') as HTMLAudioElement;
    return audioPlayer;
  }

}
