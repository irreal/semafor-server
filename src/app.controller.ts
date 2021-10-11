import { Body, Controller, Get, Param, Patch, Put, Sse } from '@nestjs/common';
import { map, Observable, tap } from 'rxjs';
import { AppService } from './app.service';
import { DisplayDataDto } from './models/display-data.dto';
import { StepDto } from './models/step.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getSemaphoreData(): DisplayDataDto {
    return this.appService.getCurrentData();
  }

  @Put(':index')
  updateStep(@Body() step: StepDto, @Param('index') index: number): void {
    console.log('index, step', index, step);
    this.appService.setStep(index, step);
  }

  @Patch('currentstep')
  setCurrentStep(@Body() step: { index: number }): void {
    this.appService.setCurrentStep(step.index);
  }
  @Sse('sse')
  getSseData(): Observable<{ data: DisplayDataDto }> {
    return this.appService.latestUpdate.pipe(
      map((d) => ({
        data: d,
      })),
    );
  }
}
