import { StepDto } from './step.dto';

export class DisplayDataDto {
  title: string;
  steps: StepDto[];
  currentStep: number;
}
