import { PmInputTextConfig } from "../pm-input-text/pm-input-text-config";
import { PmTableConfig } from "../pm-table/pm-table-config";

export class PmCardConfig {
  name!: string;

  type!: 'card';

  fields?: (PmCardConfig | PmTableConfig | PmInputTextConfig)[];

  constructor(config?: Partial<PmCardConfig>) {

    Object.assign(this, config);
  }
}