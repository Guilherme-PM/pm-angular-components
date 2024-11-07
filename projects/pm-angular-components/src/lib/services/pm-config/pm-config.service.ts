import { Injectable } from '@angular/core';
import { PmConfig } from '../../models/pm-table/pm-config';

@Injectable({
  providedIn: 'root'
})
export class PmConfigService {
  private config: PmConfig = {
    booleanIcons: {
      trueIcon: 'pi pi-check-square',
      falseIcon: 'pi pi-times'
    }
  };
  
  setConfig(newConfig: PmConfig) {
    this.config = this.mergeDeep(this.config, newConfig);
  }

  getConfig(): PmConfig {
    return this.config;
  }

  private mergeDeep(target: any, source: any) {
    for (const key in source) {
      if (source[key] instanceof Object && target[key]) 
        Object.assign(source[key], this.mergeDeep(target[key], source[key]));
    }

    return { ...target, ...source };
  }
}
