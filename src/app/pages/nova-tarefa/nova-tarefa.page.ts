import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Tarefa} from '../../models/tarefa-model';
import {TarefasService} from '../../services/tarefas.service';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.page.html',
  styleUrls: ['./nova-tarefa.page.scss'],
  standalone: false
})
export class NovaTarefaPage {

  form: FormGroup;
  private formBuilder: FormBuilder = inject(FormBuilder);
  private tarefasService: TarefasService = inject(TarefasService);
  private router: Router = inject(Router);
  private toastController = inject(ToastController);

  constructor() {
    this.form = this.formBuilder.group({
      id: [''],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      concluido: [false],
    })
  }

  async salvarTarefa() {
    const tarefa: Tarefa = this.form.getRawValue();
    await this.tarefasService.salvarTarefaStorage(tarefa);
    await this.tarefasService.presentToast('middle', 'Tarefa adicionada com sucesso!', 'success');
    await this.router.navigate(['tarefas']);
  }

  cancelar() {
    this.form.reset();
    this.router.navigate(['tarefas']);
  }

}
