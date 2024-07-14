// chatbot.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {
  userMessage: string;
  botResponse: string;

  constructor() {}

  ngOnInit(): void {}

  sendMessage(): void {
    this.botResponse = this.getResponse(this.userMessage);
  }

  getResponse(message: string): string {
    const responseMap = {
      fever: 'Take paracetamol and drink plenty of fluids.',
      cold: 'Take rest and drink warm fluids.'
    };
    return responseMap[message.toLowerCase() as keyof typeof responseMap] || 'Sorry, I do not understand.';
  }
}
