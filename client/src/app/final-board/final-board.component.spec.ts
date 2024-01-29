import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalBoardComponent } from './final-board.component';

describe('FinalBoardComponent', () => {
  let component: FinalBoardComponent;
  let fixture: ComponentFixture<FinalBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinalBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinalBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
