import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRolePermissionComponent } from './user-role-permission.component';

describe('UserRolePermissionComponent', () => {
  let component: UserRolePermissionComponent;
  let fixture: ComponentFixture<UserRolePermissionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserRolePermissionComponent]
    });
    fixture = TestBed.createComponent(UserRolePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
