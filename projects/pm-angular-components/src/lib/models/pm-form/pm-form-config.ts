import { PmCardConfig } from "../pm-card/pm-card-config";
import { PmInputTextConfig } from "../pm-input-text/pm-input-text-config";
import { PmTableConfig } from "../pm-table/pm-table-config";

export class PmFormConfig {
  title!: string
  cards?: PmCardConfig[];
  fields?: (PmCardConfig | PmTableConfig | PmInputTextConfig)[]

  constructor(config?: Partial<PmFormConfig>) {

    Object.assign(this, config);
  }
}