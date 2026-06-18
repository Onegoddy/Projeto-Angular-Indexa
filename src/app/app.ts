import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './componentes/container/container';
import { Cabecalho } from './componentes/cabecalho/cabecalho';
import { Separador } from './componentes/separador/separador';
import { Contato } from './componentes/contato/contato';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Container, Cabecalho, Separador,Contato],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
}
