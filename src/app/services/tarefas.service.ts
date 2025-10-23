import {Injectable} from '@angular/core';
import {TarefaModel} from '../models/tarefa-model';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  tarefas: TarefaModel[] = [];
  proximoId = 0;

  salvarTarefa(tarefa: TarefaModel) {
    tarefa.id = this.proximoId;
    this.tarefas.push(tarefa);
    this.proximoId++;
  }

  listarTarefas() {
    return this.tarefas;
  }
}
