import { Injectable } from '@nestjs/common';
import { ReplaySubject } from 'rxjs';
import { DisplayDataDto } from './models/display-data.dto';
import { StepDto } from './models/step.dto';

@Injectable()
export class AppService {
  displayData: DisplayDataDto;

  latestUpdate: ReplaySubject<DisplayDataDto> = new ReplaySubject(1);

  constructor() {
    this.displayData = {
      title: 'SB Split',
      currentStep: 0,
      steps: [
        {
          title: '(09:00) @Riedwaan Alexander DB restore',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title: '(09:00) Disconnect Raptor on Victory from AG',
          description:
            'Wait for AG job to release Raptor DB\nStop SQL Server Agent\nKill any jobs holding on to Raptor DB\n',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(09:05) Complete restore of full Raptor backup on Victory2 (primary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(10:30) Complete restore of full Raptor backup on Victory1 (secondary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(12:00) Complete restore of full Raptor-OR backup on Victory2 (primary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(13:30) Complete restore of full Raptor-OR backup on Victory1 (secondary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(11:00) Andre/Alek Deploy Victory FE sites pointing to new Sports APIs',
          description:
            '@Jean Paul Sultana / @Milutin Kecojevic provide the feed (CDN) and betting Sports APIs\nDeploy Desktop Victory website pointing to new Sports APIs on UAT environment\nDeploy Mobile Victory website pointing to new Sports APIs on UAT environment\n',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(11:00) Release latest production sports code on Victory prod environment.',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(11:00) Jean/Clifton Vella Sync code repository on Victory tenant',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title: '(11:00) @Jean Paul Sultana Update Victory nuget packages',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(11:30) @Jean Paul Sultana Configure Victory production azure tokens',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(12:00) Jean/Miloš Stanojević Build and release master code on Victory tenant',
          description: 'Run build pipeline\nRun prod release pipeline\n',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title: '(16:05) @Riedwaan Alexander DB Restore',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(16:05) restoring Raptor logs from last full backup Victory2 (primary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(16:10) restoring Raptor logs from last full backup Victory1 (secondary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(16:15) restore all Raptor-OR logs from last full backup until 16:00 on Victory2 (primary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(16:20) restore all Raptor-OR logs from last full backup on Victory1 (secondary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title: '(22:05) @Riedwaan Alexander DB Restore',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(22:05) restoring all Raptor logs from till 22:00 on Victory2 (primary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(22:10) restoring all Raptor logs from till 22:00 on Victory1 (secondary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(22:15) restore all Raptor-OR logs from 16:00 until 22:00 on Victory2 (primary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(22:20) restore all Raptor-OR logs 22:00 on Victory1 (secondary)',
          description:
            '\n@Riedwaan Alexander to advise when the last log files are restored\n',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(00:05) Andre/Alek Put Victory websites in maintenance mode - VICTORY IS OFFLINE!',
          description:
            'Put Desktop and Mobile Victory websites in maintenance mode\n',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title: '(00:05) Miloš/Jean Configure External Settlement on BK side',
          description:
            'Remove configuration for Victory channel (SETTLEMENTS MUST NOT BE SENT FROM BK SIDE)\n',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title: '(00:10) @Riedwaan Alexander Restore DB',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(00:05) Restore all remaining Raptor logs from 22:00 to 00:00 on Victory2 (primary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(00:20) Restore all remaining Raptor logs from 22:00 to 00:00 on Victory1 (secondary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(00:40) Restore all remaining Raptor-OR logs from 22:00 to 00:00 on Victory2 (primary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(00:55) Restore all remaining Raptor-OR logs from 22:00 to 00:00 on Victory1 (secondary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title: '(01:00) Put Raptor DB into recovery mode (primary ONLY)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title: '(01:10) Add back to AG on both Victory1 and Victory2',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(01:15) Check AG health and startup SQL Server Agent on Victory2 (primary)',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title: '(01:20) Check Primary AG Replicas if needed',
          description:
            'If SQL jobs are not picking up Raptor on Victory2 as primary, then run the following job - CheckPrimaryAGReplicas',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(00:10) @Milutin Kecojevic Configure Victory Sports CDN to point to new Vic prod Sports APIs',
          description: '',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(01:30) @Miloš Stanojević / @Jean Paul Sultana / @Clifton Vella Start sports services',
          description:
            'Start Betting APIs\nStart Feed APIs\nStart Internal APIs\nStart Live Odds WCF IIS service\nStart Odds Cache service (OCS) - Confirm caches are built\nStart BO Host service\nStart BO WCF\nStart Evaluation Dispatcher service\nStart Batch Processor service\nStart Bet Placement services\nStart Cache Update Publisher service\nStart BetRadar UOF Importer service\nStart Saga Betradar Live Odds service\nStart Feed Provider service\nStart Settlement Live Agent service\nStart Settlement Prematch Agent service\nStart Settlement Promotion Agent service\nStart Settlement Risk Decrease Agent service\nStart Settlement External Agent service\n',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title: '(02:00) Sanity checks on UAT',
          description:
            '@Miloš Stanojević / @Jean Paul Sultana / @Marija Miletic / @Nikola Djordjevic Sanity checks on UAT sites\n',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(03:00) @Terence Cassar / @Camilo Pedroso Platform to point to new Sports Internal APIs on Victory tenant',
          description:
            'Change config to new Sports Internal APIs in DB\nFlush Redis keys\n',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title:
            '(03:15) @Andre Abdilla / @Aleksandar Alempijevic Swap Victory websites - VICTORY IS ONLINE!',
          description:
            'Swap Desktop UAT website with production\nSwap Mobile UAT website with production\n',
          errorStatus: null,
          completeStatus: null,
        },
        {
          title: '(03:20) Perform sanity checks',
          description:
            '@Miloš Stanojević / @Jean Paul Sultana Sanity checks, making sure the services work and checking Kibana\n',
          errorStatus: null,
          completeStatus: null,
        },
      ],
    };
  }

  getCurrentData(): DisplayDataDto {
    return this.displayData;
  }

  setCurrentStep(step: number): void {
    this.displayData.currentStep = step;
    this.latestUpdate.next(this.displayData);
  }
  setStep(index: number, step: StepDto): void {
    this.displayData.steps[index] = step;
    this.latestUpdate.next(this.displayData);
  }
}
