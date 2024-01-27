import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoheaderComponent } from './infoheader.component';

describe('InfoheaderComponent', () => {
  let component: InfoheaderComponent;
  let fixture: ComponentFixture<InfoheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoheaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
