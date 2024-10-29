import { Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDivider } from '@angular/material/divider';
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { DialogScrollableContentDialog } from '../dialog-scrollable-content/dialog-scrollable-content.dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';
import { DataService } from '../services/data.service';
import { DatePipe } from '@angular/common';

const ELEMENT_DATA: any[] = [
  {
    requestId: 'ab0f5981-7ec3-45b0-bbb4-c010430f7975',
    inputMessage:
      '{1:F01CHASGB2LAXXX0000000000}{2:I103CHASUS33XXXXN}{3:{108:BUD}{121:0902c16a-b699-4e69-a40d-1536d11ed403}}{4:\r\n:20:ELC/MBW/19/0007\r\n:23B:CRED\r\n:32A:190924USD728173,40\r\n:33B:GBP500000,00\r\n:36:1,5619\r\n:50A:CHASGB2LXXX\r\n:52A:CHASGB2LXXX\r\n:53B:/BO-NYNY-BOST NY-CV-USD-2\r\n:59:EASTERN OIL MULTINATIONAL\r\nBELLVIEW GARDENS COMPLEX\r\n4TH AVENUE\r\nNEW YORK, NY2078\r\n:70:/RFB/DOCSPRESENT01\r\n:71A:BEN\r\n:71F:GBP33790,00\r\n:71F:USD0,00\r\n:72:/ACC/SETTLE THROUGH VOSTRO ACCOUNT\r\n-}',
    creationTimestamp: '2024-10-21T14:21:09.726267',
    statusCode: 'SUCCESS',
    statusReason:
      'Translation successful. Message Sent to Swift Alliance Access ',
    flowType: 'OUTBOUND',
    translationDirection: 'MTtoMX',
    inputMessageType: null,
    senderBic: 'CHASGB2LXXX',
    receiverBic: 'CHASUS33XXX',
    outputMessage:
      '\r\n<AppHdr xmlns="urn:iso:std:iso:20022:tech:xsd:head.001.001.02">\n    <Fr>\n        <FIId>\n            <FinInstnId>\n                <BICFI>CHASGB2LXXX</BICFI>\n            </FinInstnId>\n        </FIId>\n    </Fr>\n    <To>\n        <FIId>\n            <FinInstnId>\n                <BICFI>CHASUS33XXX</BICFI>\n            </FinInstnId>\n        </FIId>\n    </To>\n    <BizMsgIdr>ELC/MBW/19/0007</BizMsgIdr>\n    <MsgDefIdr>pacs.008.001.08</MsgDefIdr>\n    <BizSvc>swift.cbprplus.02</BizSvc>\n    <CreDt>2024-10-21T14:21:11.266+05:30</CreDt>\n    <Prty>NORM</Prty>\n</AppHdr>\n\r\n<Document xmlns="urn:iso:std:iso:20022:tech:xsd:pacs.008.001.08">\n    <FIToFICstmrCdtTrf>\n        <GrpHdr>\n            <MsgId>ELC/MBW/19/0007</MsgId>\n            <CreDtTm>2024-10-21T14:21:11.266+05:30</CreDtTm>\n            <NbOfTxs>1</NbOfTxs>\n            <SttlmInf>\n                <SttlmMtd>INDA</SttlmMtd>\n                <SttlmAcct>\n                    <Id>\n                        <Othr>\n                            <Id>BO-NYNY-BOST NY-CV-USD-2</Id>\n                        </Othr>\n                    </Id>\n                </SttlmAcct>\n            </SttlmInf>\n        </GrpHdr>\n        <CdtTrfTxInf>\n            <PmtId>\n                <InstrId>ELC/MBW/19/0007</InstrId>\n                <EndToEndId>NOTPROVIDED</EndToEndId>\n                <UETR>0902c16a-b699-4e69-a40d-1536d11ed403</UETR>\n            </PmtId>\n            <IntrBkSttlmAmt Ccy="USD">728173.4</IntrBkSttlmAmt>\n            <IntrBkSttlmDt>2019-09-24</IntrBkSttlmDt>\n            <InstdAmt Ccy="GBP">500000</InstdAmt>\n            <XchgRate>1.5619</XchgRate>\n            <ChrgBr>CRED</ChrgBr>\n            <ChrgsInf>\n                <Amt Ccy="GBP">33790</Amt>\n                <Agt>\n                    <FinInstnId>\n                        <Nm>NOTPROVIDED</Nm>\n                        <PstlAdr>\n                            <AdrLine>NOTPROVIDED</AdrLine>\n                        </PstlAdr>\n                    </FinInstnId>\n                </Agt>\n            </ChrgsInf>\n            <ChrgsInf>\n                <Amt Ccy="USD">0</Amt>\n                <Agt>\n                    <FinInstnId>\n                        <Nm>NOTPROVIDED</Nm>\n                        <PstlAdr>\n                            <AdrLine>NOTPROVIDED</AdrLine>\n                        </PstlAdr>\n                    </FinInstnId>\n                </Agt>\n            </ChrgsInf>\n            <InstgAgt>\n                <FinInstnId>\n                    <BICFI>CHASGB2LXXX</BICFI>\n                </FinInstnId>\n            </InstgAgt>\n            <InstdAgt>\n                <FinInstnId>\n                    <BICFI>CHASUS33XXX</BICFI>\n                </FinInstnId>\n            </InstdAgt>\n            <Dbtr>\n                <Id>\n                    <OrgId>\n                        <AnyBIC>CHASGB2LXXX</AnyBIC>\n                        <Othr>\n                            <Id>NOTPROVIDED</Id>\n                            <SchmeNm>\n                                <Cd>TXID</Cd>\n                            </SchmeNm>\n                        </Othr>\n                    </OrgId>\n                </Id>\n            </Dbtr>\n            <DbtrAgt>\n                <FinInstnId>\n                    <BICFI>CHASGB2LXXX</BICFI>\n                </FinInstnId>\n            </DbtrAgt>\n            <CdtrAgt>\n                <FinInstnId>\n                    <BICFI>CHASUS33XXX</BICFI>\n                </FinInstnId>\n            </CdtrAgt>\n            <Cdtr>\n                <Nm>EASTERN OIL MULTINATIONAL</Nm>\n                <PstlAdr>\n                    <AdrLine>BELLVIEW GARDENS COMPLEX</AdrLine>\n                    <AdrLine>4TH AVENUE</AdrLine>\n                    <AdrLine>NEW YORK, NY2078</AdrLine>\n                </PstlAdr>\n                <Id>\n                    <OrgId>\n                        <Othr>\n                            <Id>NOTPROVIDED</Id>\n                        </Othr>\n                    </OrgId>\n                </Id>\n            </Cdtr>\n            <InstrForCdtrAgt>\n                <InstrInf>SETTLE THROUGH VOSTRO ACCOUNT</InstrInf>\n            </InstrForCdtrAgt>\n            <RmtInf>\n                <Ustrd>/RFB/DOCSPRESENT01</Ustrd>\n            </RmtInf>\n        </CdtTrfTxInf>\n    </FIToFICstmrCdtTrf>\n</Document>\n',
    outputMessageType: 'pacs.008.001.08',
    senderDn: 'cn=cayman,o=ptsqgbbb,o=swift',
    receiverDn: 'cn=swiftuser4,ou=tor,o=ptsqgbbb,o=swift',
    events: [
      {
        id: 61,
        requestId: 'ab0f5981-7ec3-45b0-bbb4-c010430f7975',
        statusCode: 'Processing',
        statusReason: 'Message Received from BO',
        timestamp: '2024-10-21T14:21:09.875454',
        flowType: 'OUTBOUND',
        translationDirection: 'MTtoMX',
      },
      {
        id: 62,
        requestId: 'ab0f5981-7ec3-45b0-bbb4-c010430f7975',
        statusCode: 'SUCCESS',
        statusReason:
          'Translation successful. Message Sent to Swift Alliance Access ',
        timestamp: '2024-10-21T14:21:14.645468',
        flowType: 'OUTBOUND',
        translationDirection: 'MTtoMX',
      },
    ],
  },
];

@Component({
  selector: 'app-main',
  standalone: true,
  providers: [DatePipe],
  imports: [
    RouterLink,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
    MatIcon,
    MatIconButton,
    MatSuffix,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDivider,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelect,
    MatOption,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  displayedColumns: string[] = [
    'requestId',
    'flowType',
    'senderBic',
    'statusReason',
    'receiverBic',
    'statusCode',
    'creationTimestamp',
  ];
  //  ELEMENT_DATA  [];
  dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  formGroup: FormGroup;

  constructor(
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    public dataService: DataService,
    public datePipe: DatePipe
  ) {}
  @ViewChild('myForm') myForm: NgForm;
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit() {
    this.createForm();
    // const request= "creationTimestampFrom=2024-10-28T00:00:00&creationTimestampTo=2024-10-28T23:59:59"
    // this.dataService.getSearchResult(request).subscribe((res) => {
    //   console.log('service Call', res);
    // });
  }
  openDialog(events: any): void {
    console.log(events);
    this.dialog.open(DialogScrollableContentDialog, {
      data: { events: events },
    });
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      flowType: [null],
      statusCode: [null],
      startDate: [null],
      endDate: [null],
      translationDirection: [null],
      startTime: [null],
      endTime: [null],
    });
  }
  onSubmit(formData: any) {
    console.log('post',formData)
    let  request= "creationTimestampFrom=2024-10-28T00:00:00&creationTimestampTo=2024-10-28T23:59:59";
    const startDate = this.datePipe.transform(formData.startDate, 'yyyy-MM-dd')+"T"+formData.startTime;
    const endDate = this.datePipe.transform(formData.endDate, 'yyyy-MM-dd')+"T"+formData.endTime;
    if(formData.startDate && formData.endDate ){
      request ="creationTimestampFrom="+startDate +"creationTimestampTo="+endDate
    }
    if(formData.flowType){
      request =request +"&flowType="+formData.flowType
    }
    
    if(formData.statusCode){
      request =request +"&statusCode="+formData.statusCode
    }
    if(formData.translationDirection){
      request =request +"&translationDirection="+formData.translationDirection
    }
    console.log('request',request)
    this.dataService.getSearchResult(request).subscribe((res: any) => {
      console.log('service Call', res);
      res.nipMessageList;
      this.dataSource = new MatTableDataSource<any>(res.nipMessageList);
    });
  }
  onReset() {
    this.myForm.resetForm();
  }
}
