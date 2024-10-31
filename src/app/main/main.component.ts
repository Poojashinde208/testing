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
  dataSource = new MatTableDataSource<any>([]);
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
  openDialog(ele: any): void {
    console.log(ele);
    this.dialog.open(DialogScrollableContentDialog, {
      data: { ele: ele},
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
      request ="creationTimestampFrom="+startDate +"&creationTimestampTo="+endDate
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
     
    // this.dataSource = new MatTableDataSource<any>(data.nipMessageList);
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
