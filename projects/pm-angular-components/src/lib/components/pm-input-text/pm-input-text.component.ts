import { Component, Input } from '@angular/core';
import { PmInputTextConfig } from '../../models/pm-input-text/pm-input-text-config';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'pm-input-text',
  standalone: true,
  imports: [InputTextModule],
  templateUrl: './pm-input-text.component.html',
  styleUrl: './pm-input-text.component.scss'
})
export class PmInputText {
  @Input()
  public pmInputTextConfig!: PmInputTextConfig
}
