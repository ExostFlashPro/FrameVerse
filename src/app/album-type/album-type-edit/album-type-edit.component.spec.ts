import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTypeEditComponent } from './album-type-edit.component';

describe('AlbumTypeEditComponent', () => {
  let component: AlbumTypeEditComponent;
  let fixture: ComponentFixture<AlbumTypeEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumTypeEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
