import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsBoardComponent } from './groups-board.component';

describe('GroupsBoardComponent', () => {
  let component: GroupsBoardComponent;
  let fixture: ComponentFixture<GroupsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupsBoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
