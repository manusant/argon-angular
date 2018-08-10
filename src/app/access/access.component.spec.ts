import {TestBed, async} from '@angular/core/testing';
import {AccessComponent} from './access.component';

describe('AccessComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AccessComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AccessComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'argon-angular'`, async(() => {
        const fixture = TestBed.createComponent(AccessComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('argon-angular');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AccessComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to argon-angular!');
    }));
});
