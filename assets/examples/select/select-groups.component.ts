/*
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'nb-select-groups',
  templateUrl: './select-groups.component.html',
  styles: [`
    nb-select {
      margin-right: 0.75rem;
      margin-bottom: 1rem;
    }

    :host {
      display: block;
      width: 15rem;
      height: 25rem;
    }
  `],
})
export class NbSelectGroupsComponent {
}