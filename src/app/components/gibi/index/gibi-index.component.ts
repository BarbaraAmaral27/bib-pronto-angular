import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Gibi } from 'src/app/models/gibi.model';
import { GibiService } from 'src/app/services/gibi/gibi.service';

@Component({
  selector: 'app-gibi-index',
  templateUrl: './gibi-index.component.html',
  styleUrls: ['./gibi-index.component.css']
})
export class GibiIndexComponent implements OnInit {

  gibis: Gibi[];

  searchId: string;
  searchTitulo: string;

  constructor(private router: Router, private gibiService: GibiService) {
    this.gibis = new Array<Gibi>();
    this.searchId = "";
    this.searchTitulo= "";
  }

  ngOnInit(): void {
  }

  goToCreate(): void {
    this.router.navigateByUrl("gibi-create")
  }

  clearList(): void {
    this.gibis = [];
  }

  get(): void {
    console.log("GibiIndexComponent.get");
    console.log("searchId = " + this.searchId);
    console.log("searchTitulo = " + this.searchTitulo);

    this.clearList();

    if (this.searchId !== "") {
      const id: number = Number(this.searchId);
      this.getById(id);
      return;
    }

    if (this.searchTitulo !== "") {
      this.getByTitulo(this.searchTitulo);
      return;
    }

    this.getAll();
  }

  getAll(): void {
    console.log("GibiIndexComponent.getAll-start");
    this.gibiService.getAll()
      .subscribe(gibis => {
        this.gibis = gibis;
        console.log("Resposta chegou agora:");
        console.log(this.gibis);
      });
    console.log(this.gibis);
    console.log("GibiIndexComponent.getAll-end");
  }

  getById(id: number): void {
    console.log("GibiIndexComponent-getById-start");
    this.gibiService.getById(id)
      .pipe(
        take(1)
      )
      .subscribe(data => {
        console.log(data);
        if (data != null)
          this.gibis.push(data);
      });
    console.log("GibiIndexComponent-getById-end");
  }

  getByTitulo(titulo: string): void {
    console.log("GibiIndexComponent.getByDescricao-start");
    this.gibiService.getByTitulo(titulo)
      .subscribe(gibis => {
        this.gibis = gibis;
      });
    console.log(this.gibis);
    console.log("GibiIndexComponent.getByDescricao-end");
  }

  goToEdit(id: number): void {
    this.router.navigate(["gibi-edit", id]);
  }

  delete(id: number): void {
    console.log("GibiIndexComponent.delete")
    console.log("Id = " + id);
    this.gibiService.delete(id)
      .subscribe(() => {
        this.getAll();
      });
  }
}
