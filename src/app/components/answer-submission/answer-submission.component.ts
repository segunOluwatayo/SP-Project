import { Component, Input } from '@angular/core';
import { AnswerService } from '../services/answer.service';
import { Answer } from '../models/answer.model';

@Component({
  selector: 'app-answer-submission',
  templateUrl: './answer-submission.component.html',
  styleUrls: ['./answer-submission.component.css']
})
export class AnswerSubmissionComponent {
  @Input() questionId: string = '';
  answer: Answer = {
    _id: '',
    content: '',
    author: {
    _id: '',
    name: '',
    email: ''
    },
    question: this.questionId
    };
    
    constructor(private answerService: AnswerService) {}
    
    submitAnswer(): void {
    this.answer.question = this.questionId;
    this.answerService.createAnswer(this.answer).subscribe(
    () => {
    this.answer.content = ''; // Clear the answer input field
    },
    (error) => {
    console.error('Error submitting answer:', error);
    }
    );
    }
    }