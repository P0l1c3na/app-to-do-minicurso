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

  constructor() {
  }

  // Ionic lifecycle hook: é executado sempre que a visualização está prestes a entrar e se tornar ativa
  async ionViewWillEnter() {
    await this.buscarTarefas();
  }

  async buscarTarefas() {
    this.tarefas = await this.tarefasService.listarTarefasStorage();
  }

  getQuantidadeTarefasConcluidas() {
    return this.tarefas.filter(tarefa => tarefa.concluido).length;
  }

  getQuantidadeTarefasNaoConcluidas() {
    return this.tarefas.filter(tarefa => !tarefa.concluido).length;
  }

  async atualizarTarefa(tarefa: Tarefa) {
    await this.tarefasService.atualizarTarefa(tarefa);
    await this.buscarTarefas();
    await this.tarefasService.presentToast('bottom', tarefa.concluido ? 'Tarefa concluída!' : 'Tarefa atualizada como pendente');
  }
}
