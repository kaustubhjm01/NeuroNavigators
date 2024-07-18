// chatbot.component.ts

import { Component, OnInit } from '@angular/core';
// import { VoiceRecognitionService } from './voice-recognition.service';
import { VoiceRecognitionService } from '../voice-recognition.service';
@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent  {
  userMessage: string;
  botResponse: string;

  listening: boolean = false;
  errorMessage: string = '';
  // constructor() {}

  // ngOnInit(): void {}

  // sendMessage(): void {
  //   this.botResponse = this.getResponse(this.userMessage);
  // }

  // getResponse(message: string): string {
  //   const responseMap = {
  //     fever: 'Take paracetamol and drink plenty of fluids.',
  //     cold: 'Take rest and drink warm fluids.'
  //   };
  //   return responseMap[message.toLowerCase() as keyof typeof responseMap] || 'Sorry, I do not understand.';
  // }

  constructor(private voiceService: VoiceRecognitionService) {}

  startVoiceRecognition() {

    if (this.listening) {
      return;
    }

    this.listening = true;
    this.errorMessage = '';
    this.voiceService.startListening(
      (result: string) => {
        this.listening = false;
        this.handleVoiceCommand(result);
      },
      (error: string) => {
        this.listening = false;
        this.handleError(error);
      }
    );
  }

  // startListening(): void {
  //   this.voiceService.startRecognition((command: string) => {
  //     this.handleVoiceCommand(command);
  //   });
  // }

  stopListening(): void {
    this.voiceService.stopRecognition();
  }
  // handleVoiceCommand(command: string) {
  //   if (command.toLowerCase().includes('show video')) {
  //     window.open('https://www.youtube.com', '_blank');
  //   } else if (command.toLowerCase().includes('tell me a joke')) {
  //     alert('Here’s a funny joke for you!');
  //   } else if (command.toLowerCase().includes('play game')) {
  //     this.askForGameChoice();
  //   } else {
  //     alert('Command not recognized');
  //   }
  // }

  handleVoiceCommand(command: string) {
    if (command.toLowerCase().includes('show video')) {
      this.voiceService.speak('What kind of videos you would like to watch? Entertainment, Workout Pet Sports' , () =>{
        this.askForVideoChoice();
      });
      
      // window.open('https://www.youtube.com', '_blank');
    } else if (command.toLowerCase().includes('tell me a joke')) {
    
      this.voiceService.speak('Here’s a funny joke for you! oo');
    } else if (command.toLowerCase().includes('play game')) {
      this.voiceService.speak('Which game do you want to play?  ', () => {
        this.askForGameChoice();
      });
    } else {
      this.voiceService.speak('Command not recognized');
    }
  }

  // askForGameChoice() {
  //   // if (this.listening) {
  //   //   return;
  //   // }
  //   this.listening = true;
  //   this.voiceService.startListening(
  //     (result: string) => {
  //       this.listening = false;
  //       this.redirectToGame(result);
  //     },
  //     (error: string) => {
  //       this.listening = false;
  //       this.handleError(error);
  //     }
  //   );
  // }

  // redirectToGame(game: string) {
  //   switch (game.toLowerCase()) {
  //     case 'chess':
  //       window.open('https://www.chess.com', '_blank');
  //       break;
  //     case 'sudoku':
  //       window.open('https://www.websudoku.com', '_blank');
  //       break;
  //     case 'puzzle':
  //       window.open('https://www.jigsawplanet.com', '_blank');
  //       break;
  //     default:
  //       alert('Game not recognized');
  //   }
  // }

  askForVideoChoice() {
    if (this.listening) {
      return;
    }

    this.listening = true;
    console.log('Asking for Video choice...');
    this.voiceService.startListening(
      (result: string) => {
        this.listening = false;
        console.log(`video  choice received: ${result}`);
        this.redirectToVideo(result);
      },
      (error: string) => {
        this.listening = false;
        this.handleError(error);
      }
    );
  }
  redirectToVideo(video : string ){

    video.toLowerCase()
    console.log(`Redirecting to Video : ${video}`);
    if(video.includes('entertainment')){
      window.open('https://www.youtube.com/results?search_query=entertainment+videos', '_blank');
    }
    else if(video.includes('workout')){
      window.open('https://www.youtube.com/results?search_query=Workout+videos', '_blank');
    }
    else if(video.includes('pet')){
      window.open('https://www.youtube.com/results?search_query=pet+videos', '_blank');
    }
    else if(video.includes('sports')){
      window.open('https://www.youtube.com/results?search_query=Sports+videos', '_blank');
    }
    else{
      window.open('https://www.youtube.com', '_blank');
    }
    
  }
  askForGameChoice() {
    if (this.listening) {
      return;
    }

    this.listening = true;
    console.log('Asking for game choice...');
    this.voiceService.startListening(
      (result: string) => {
        this.listening = false;
        console.log(`Game choice received: ${result}`);
        this.redirectToGame(result);
      },
      (error: string) => {
        this.listening = false;
        this.handleError(error);
      }
    );
  }

  redirectToGame(game: string) {
    console.log(`Redirecting to game: ${game}`);
    switch (game.toLowerCase()) {
      // case game.contains('chess')
      // if()
      case 'chess':
        window.open('https://www.chess.com/', '_blank');
        break;
      case 'sudoku':
        window.open('https://sudoku.com/', '_blank');
        break;
      case 'puzzle':
        window.open('https://www.jigsawplanet.com/', '_blank');
        break;
      default:
        this.voiceService.speak('Game not recognized');
    }
  }

  handleError(error: string) {
    if (error === 'no-speech') {
      this.errorMessage = 'No speech detected. Please try again.';
    } else {
      this.errorMessage = `Error occurred: ${error}`;
    }
  }
}
