import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [FormsModule, RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  name: string = '';
  saved: boolean = false;
  save() {
    this.saved = true;
    alert('Profile saved!');
  }
  canDeactivate() {
    if (!this.saved) {
      console.log('canDeactivate() called!');
      return confirm('You have unsaved changes! Do you really want to leave?');
    }
    return true;
  }
}
