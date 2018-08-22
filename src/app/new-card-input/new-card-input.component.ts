import {Component, EventEmitter, OnInit, Output,HostListener,ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';
import { takeWhile, debounceTime, filter } from 'rxjs/operators';

@Component({
  selector: 'app-new-card-input',
  templateUrl: './new-card-input.component.html',
  styleUrls: ['./new-card-input.component.css'],
  host: {'class': 'col-4'}
})
export class NewCardInputComponent implements OnInit {
  newCardForm: FormGroup;
  public newCard: any = {text: ''};
  private alive = true;
  @Output() onCardAdd = new EventEmitter<string>();
  constructor(fb: FormBuilder) {
	  this.newCardForm = fb.group({
	    'text': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
	  });

	  this.newCardForm.valueChanges.pipe(filter((value) => this.newCardForm.valid),
      debounceTime(500),
  	  takeWhile(() => this.alive)
	  ).subscribe(data => {
   	  console.log(data);
	});
  }

  ngOnInit() {
  }
  @ViewChild('form') public form: NgForm;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
	if (event.code === "Enter" && this.form.valid) {
	  this.addCard(this.newCardForm.controls['text'].value);
    }
  }


  addCard(text) {
  	this.onCardAdd.emit(text);
  	this.newCardForm.controls['text'].setValue('');
  }

}
