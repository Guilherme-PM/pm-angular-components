import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PmTableConfig } from '../../models/pm-table/pm-table-config';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Translation } from '../../models/translation';
import { translationPTBR } from '../../../assets/idiomes/pt-br-translation';
import { translationEN } from '../../../assets/idiomes/en-translation';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ErrorHandlerService } from '../../services/error/error-handler.service';
import { PrimeNGConfig } from 'primeng/api';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'pm-table',
  standalone: true,
  imports: [RippleModule, TableModule, CommonModule, ButtonModule, InputTextModule, MultiSelectModule, DropdownModule, FormsModule, CalendarModule],
  templateUrl: './pm-table.component.html',
  styleUrl: './pm-table.component.scss'
})
export class PmTable implements OnInit {
  public translation: Translation = {} as Translation;
  
  @ViewChild('pmTable') pmTable!: Table;
  
  @Input()
  public pmTableConfig!: PmTableConfig;

  @Input()
  public data?: string;
  
  searchValue: string | undefined;

  constructor(
    private errorHadlerSvc: ErrorHandlerService,
    private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.setTranslation();
    
    this.errorHadlerSvc.validateConfig(this.pmTableConfig, this.translation);
  
    if(this.data)
      this.pmTableConfig.data = this.data;


    console.log(this.pmTableConfig);
  }

  get globalLabelsFilter(): string[] {
    return this.pmTableConfig.columns.map((col) => col.id) || [];
  }

  clearFilters(pmTable: Table) {
    pmTable.clear();
    this.searchValue = '';
  }

  onFilterGlobal(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement) {
      this.pmTable.filterGlobal(inputElement.value, 'contains');
    }
  }

  expandAll() {

  }

  collapseAll() {
  }

  darkenColor(color: string): string {
    const num = parseInt(color.replace("#", ""), 16),
      amt = Math.round(2.55 * 20);
    const R = (num >> 16) - amt;
    const G = ((num >> 8) & 0x00ff) - amt;
    const B = (num & 0x0000ff) - amt;
    return (
      "#" +
      (0x1000000 +
        (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
        (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
        (B < 255 ? (B < 1 ? 0 : B) : 255)
      )
        .toString(16)
        .slice(1)
    );
  }
  
  setTranslation(): void {
    switch (this.pmTableConfig.language) {
      case 'pt-br':
        this.translation = translationPTBR;
        break;
      case 'en':
      default:
        this.translation = translationEN;
        break;
    }

    this.primengConfig.setTranslation(this.translation);
  }
}