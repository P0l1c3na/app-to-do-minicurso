import {inject, Injectable} from '@angular/core';
import {Tarefa} from '../models/tarefa-model';
import {StorageService} from './storage.service';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  tarefas: Tarefa[] = [];

  KEY_TAREFAS = "TAREFAS_STORAGE";
  KEY_ID_TAREFA = "ID_TAREFA_STORAGE";

  storage: StorageService = inject(StorageService);
  toastController: ToastController = inject(ToastController);


  async obterId() {
    let id: number = await this.storage.get(this.KEY_ID_TAREFA) ?? 1;
    const proximoId = id + 1;
    await this.storage.set(this.KEY_ID_TAREFA, proximoId);
    return id;
  }

  // Salva as tarefas no storage
  async salvarTarefaStorage(tarefa: Tarefa) {
    const tarefasExistentes: Tarefa[] = await this.storage.get(this.KEY_TAREFAS) ?? [];
    tarefa.id = await this.obterId();
    tarefasExistentes.push(tarefa);
    await this.storage.set(this.KEY_TAREFAS, tarefasExistentes);
  }

  // Lista as tarefas do Storage
  async listarTarefasStorage() {
    return await this.storage.get(this.KEY_TAREFAS) ?? [];
  }

// Atualiza se a tarefa foi concluída (mantendo a ordem)
  async atualizarTarefa(tarefaAtualizada: Tarefa) {
    const tarefas: Tarefa[] = await this.listarTarefasStorage();

    const tarefasAtualizadas = tarefas.map(tarefa =>
      tarefa.id === tarefaAtualizada.id ? tarefaAtualizada : tarefa
    );

    await this.storage.set(this.KEY_TAREFAS, tarefasAtualizadas);
  }


  async presentToast(position: 'top' | 'middle' | 'bottom', msgText: string, color = '') {
    const toast = await this.toastController.create({
      message: msgText,
      duration: 1500,
      position: position,
      color: color,
    });

    await toast.present();
  }

}
