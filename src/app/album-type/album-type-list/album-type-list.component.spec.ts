import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTypeListComponent } from './album-type-list.component';

describe('AlbumTypeListComponent', () => {
  let component: AlbumTypeListComponent;
  let fixture: ComponentFixture<AlbumTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumTypeListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
