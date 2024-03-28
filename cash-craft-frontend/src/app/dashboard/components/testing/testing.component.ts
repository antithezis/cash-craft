import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subject, exhaustMap, filter, tap } from 'rxjs';
import { TestingService } from '../../../auth/services/testing.service';

@Component({
  selector: 'app-testing',
  standalone: true,
  imports: [],
  template: ` <p>testing works!</p> `,
  styles: ``,
})
export class TestingComponent {
  private testingService = inject(TestingService);
  private fb = inject(FormBuilder);

  constructor() {
    this.subscribeToSubmited();
  }

  albums: any;
  loading = false;
  submited$: Subject<void> = new Subject<void>();

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  subscribeToSubmited() {
    this.submited$
      .pipe(
        tap(() => (this.loading = true)),
        filter(() => this.form.valid),
        exhaustMap(() => {
          const { name, email, password } = this.form.value;
          const data = { name, email, password };
          return this.testingService.validateUser(data);
        })
      )
      .subscribe({
        next: (data) => {
          this.albums = data;
          this.loading = false;
        },
        error: (error) => {
          if (
            error.listErrorDto.code === 'SFB0000' ||
            error.listErrorDto.code === 'SFB0001' ||
            error.listErrorDto.code === 'SFB0002' ||
            error.listErrorDto.code === 'SFB0003'
          ) {
            this.loading = false;
            this.albums = 'Error fetching albums';
          } else {
            this.loading = false;
            switch (error.listErrorDto.code) {
              case 'SFB0004':
                this.albums = 'Error SFB0004 fetching albums';
                break;
              case 'SFB0005':
                this.albums = 'Error SFB0005 fetching albums';
                break;
              case 'SFB0006':
                this.albums = 'Error SFB0006 fetching albums';
            }
          }
        },
      });
  }
}
