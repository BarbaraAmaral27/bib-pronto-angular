import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Doce } from 'src/app/models/doce.model';
import { DoceService } from 'src/app/services/doce/doce.service';

@Component({
  selector: 'app-doce-edit',
  templateUrl: './doce-edit.component.html',
  styleUrls: ['./doce-edit.component.css']
})
export class DoceEditComponent implements OnInit {

  doce: Doce

  constructor(private router: Router, private doceService: DoceService, private activatedRoute: ActivatedRoute) {
    this.doce = new Doce();
    //console.log("Data = " + this.doce.DataFab.getMonth());
    // + this.doce.DataFab.getFullYear() this.doce.DataFab.getDay() +
    //this.doce.DataFab = new Date(Date.parse(datePipe.transform(this.doce.DataFab, 'yyyy-MM-dd')));
  }

  ngOnInit(): void {
    console.log("DoceEditComponent-ngOnInit");
    const id: number = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.getById(id);
  }

  getById(id: number): void {
    this.doceService.getById(id)
      .pipe(
        take(1)
      )
      .subscribe(data => {
        this.doce = data;
      });
  }

  goToIndex(): void {
    this.router.navigateByUrl("doce-index");
  }

  edit(): void {
    console.log("CadernoEditComponent-edit-start");
    this.doceService.put(this.doce)
      .pipe(
        take(1)
      )
      .subscribe(() => {
        this.goToIndex();
      });
    console.log("DoceEditComponent-edit-end");
  }
}
