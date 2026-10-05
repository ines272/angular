import { Component, input } from '@angular/core';

@Component({
  selector: 'app-conference-details',
  templateUrl: './conference-details.html'
})

export class ConferenceDetails {

  conference = input<any>();

}