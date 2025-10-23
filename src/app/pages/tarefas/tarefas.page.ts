import {Component, inject, OnInit} from '@angular/core';
import {TarefaModel} from '../../models/tarefa-model';
import {TarefasService} from '../../services/tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
  standalone: false,
})
export class TarefasPage {

  tarefas: TarefaModel[] = [];
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
