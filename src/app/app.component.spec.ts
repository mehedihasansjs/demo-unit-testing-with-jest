import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'demo-unit-testing-with-jest' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('demo-unit-testing-with-jest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, demo-unit-testing-with-jest');
  });

  it('should result 4 when add 2 + 2', () => {
    expect(2 + 2).toEqual(4);
  });

  it('should result 5 when add 3 + 2', () => {
    expect(3 + 2).toEqual(3);
  });

  it('should result 8 when add 6 + 2', () => {
    expect(6 + 2).toEqual(6);
  });
});
