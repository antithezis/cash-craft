import { of, throwError } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { TestingComponent } from './testing.component';
import { TestingService } from '../../../auth/services/testing.service';

describe('TestingComponent', () => {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should regist user success', inject(
    [TestingService, FormBuilder],
    (testingService: TestingService, fb: FormBuilder) => {

      const userMock = { name: 'name', email: 'email', password: 'password' };
      spyOn(testingService, 'validateUser').and.returnValue(of(userMock));

      component.form = fb.group({
        name: ['name', Validators.required],
        email: ['email@email.com', [Validators.required, Validators.email]],
        password: ['password', [Validators.required, Validators.minLength(6)]],
      });

      component.subscribeToSubmited();
      component.submited$.next();

      expect(component.albums).toEqual(userMock);
      expect(component['loading']).toEqual(false);
    }
  ));

  it('shoould handle error regist user', inject(
    [TestingService, FormBuilder],
    (testingService: TestingService, fb: FormBuilder) => {
      const errorCodes = [
        'SFB0000',
        'SFB0001',
        'SFB0002',
        'SFB0003',
        'SFB0004',
        'SFB0005',
        'SFB0006',
      ];

      component.form = fb.group({
        name: ['name', Validators.required],
        email: ['email@gmail.com', [Validators.required, Validators.email]],
        password: ['password', [Validators.required, Validators.minLength(6)]],
      });

      const spy = spyOn(testingService, 'validateUser');

      errorCodes.map((code) => {
        const errorMock = { listErrorDto: { code } };
        spy.and.returnValue(throwError(() => errorMock));

        component.subscribeToSubmited();
        component.submited$.next();

        expect(component['loading']).toEqual(false);

        if (code === 'SFB0004' || code === 'SFB0005' || code === 'SFB0006') {
          expect(component.albums).toEqual(`Error ${code} fetching albums`);
        } else {
          expect(component.albums).toEqual('Error fetching albums');
        }
      });

    }
  ));
});
