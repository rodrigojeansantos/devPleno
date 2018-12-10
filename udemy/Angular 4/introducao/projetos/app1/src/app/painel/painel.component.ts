import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {


  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = null

  public rodada: number = 0
  public rodadaFrase: Frase
  public progresso: number = 0

  public tentativas: number = 3

  @Output() public encerraJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('Painel foi destruido')
  }
  //Se não colocar public ele assumi por padrão
  atualizaresposta( resp: Event ): void{
    this.resposta = (<HTMLInputElement>resp.target).value    
  }

  verificarResoista(): void{

    if(this.rodadaFrase.frasePtBr == this.resposta){
      alert('A Tradução está correta')
      this.rodada++
      this.progresso = this.progresso + (100 / this.frases.length)

      if(this.rodada === 4){
        this.encerraJogo.emit('vitoria')
      }

      this.atualizaRodada()

    }else{
      this.tentativas --
      if( this.tentativas === -1 ){
        this.encerraJogo.emit('derrota')
      }
      
    }


  }

  atualizaRodada(): void{
    this.rodadaFrase = this.frases[ this.rodada ]       
      //Limpando a resposta
      this.resposta = ''
  }

}
