import { CanDeactivateFn } from '@angular/router';
import { ProfileComponent } from '../app/profile/profile.component';

export const canDeactivateGuard: CanDeactivateFn<any> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
