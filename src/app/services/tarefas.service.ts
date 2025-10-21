import {Injectable} from '@angular/core';
import {Tarefa} from '../models/tarefa-model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  tarefas: Tarefa[] = [];
  proximoId = 0;

  salvarTarefa(tarefa: Tarefa) {
    tarefa.id = this.proximoId;
    this.tarefas.push(tarefa);
    this.proximoId++;
  }

  listarTarefas() {
    return this.tarefas;
  }
}
