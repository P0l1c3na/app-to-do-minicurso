import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Tarefa} from '../../models/tarefa-model';
import {TarefasService} from '../../services/tarefas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nova-tarefa',
  templateUrl: './nova-tarefa.page.html',
  styleUrls: ['./nova-tarefa.page.scss'],
  standalone: false
})
export class NovaTarefaPage implements OnInit {

  form: FormGroup;
  private formBuilder: FormBuilder = inject(FormBuilder);
  private tarefasService: TarefasService = inject(TarefasService);
  private router: Router = inject(Router);

  constructor() {
    this.form = this.formBuilder.group({
      id: [''],
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      concluido: [false],
    })
  }

  ngOnInit() {
  }

  salvarTarefa() {
    const tarefa: Tarefa = this.form.getRawValue();
    this.tarefasService.salvarTarefa(tarefa);
    this.router.navigate(['tarefas']);
  }

}
