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

@Component({
  selector: 'pm-table',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule, InputTextModule, MultiSelectModule, DropdownModule, FormsModule, CalendarModule],
  templateUrl: './pm-table.component.html',
  styleUrl: './pm-table.component.scss'
})
export class PmTable implements OnInit {
  public translation: Translation = {} as Translation;
  
  @ViewChild('pmTable') pmTable!: Table;
  
  @Input()
  public pmTableConfig!: PmTableConfig;
  
  searchValue: string | undefined;

  ngOnInit(): void {
    this.setTranslation();
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
  }
}
