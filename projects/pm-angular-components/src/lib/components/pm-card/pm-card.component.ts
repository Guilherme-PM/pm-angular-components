import { Component, Input } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { PmCardConfig } from '../../models';

@Component({
  selector: 'pm-card',
  standalone: true,
  imports: [PanelModule],
  templateUrl: './pm-card.component.html',
  styleUrl: './pm-card.component.scss'
})
export class PmCard {
  @Input()
  public pmCardConfig!: PmCardConfig;

}
