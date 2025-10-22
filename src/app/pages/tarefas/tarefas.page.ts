import {Component, inject, OnInit} from '@angular/core';
import {Tarefa} from '../../models/tarefa-model';
import {TarefasService} from '../../services/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
  standalone: false,
})
export class TarefasPage {

  tarefas: Tarefa[] = [];
  tarefasService: TarefasService = inject(TarefasService);

  dataHoje = new Date();

  constructor() { }

  async ionViewWillEnter() {
    this.buscarTarefas();
  }

  buscarTarefas(): void {
    this.tarefas = this.tarefasService.listarTarefas();
  }

}
