import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  styles: [`
    input.ng-valid[required] {
      border: 2px solid #42A948; /* green */
    }

    input.ng-invalid {
      border: 2px solid #a94442; /* red */
    }

    .alert {
      color: #a94442; /* red */
    }
  `],
  template: `
    <h1>Contact</h1>
    <form #f="ngForm" (ngSubmit)="onSubmit(f.form.value)">
      <p>
        <label for="email">Email:</label>
        <input
            type="email" 
            [(ngModel)]="model.email" 
            name="email"
            #email="ngModel"
            required>
      </p>
      <div [hidden]="email.valid || email.pristine" class="alert alert-danger">
        Email is required
      </div>
      <p>
        <button type="reset">Reset</button>
        <button 
          type="submit"
          [disabled]="!f.form.valid">Submit</button>
      </p>
    </form>
    <pre>this.model = {{ model | json }}</pre>
  `
})
export class Contact implements OnInit {
  model = {};

  ngOnInit() {
    console.log('hello `Contact` component');
  }

  onSubmit(value) {
    console.log(`Submitted: ${JSON.stringify(value)}`);
  }
}
