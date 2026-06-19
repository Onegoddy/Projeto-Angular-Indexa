import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './componentes/container/container';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Separador } from './componentes/separador/separador';
import { Contato } from './componentes/contato/contato';


interface Contatoagenda{
  id: number
  nome: string
  telefone: string
}


import agenda from './agenda.json';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, Cabecalho, Separador,Contato,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Contatoagenda[] = agenda;

  filtroportexto:string = ''

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatosportexto(): Contatoagenda[] {
    if (!this.filtroportexto){
      return this.contatos
    }
    return this.contatos.filter(contato =>{
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.removerAcentos(this.filtroportexto).toLowerCase());
    });
  }

  filtrarContatos(letra: string): Contatoagenda[] {
    return this.filtrarContatosportexto().filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().startsWith(this.removerAcentos(letra).toLowerCase());
    });
  }
}
