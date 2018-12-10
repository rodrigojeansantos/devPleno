import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable, Observer, Subscription} from 'rxjs';
import { interval } from 'rxjs'


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})

export class OfertaComponent implements OnInit, OnDestroy {
  
  private tempoObservableSubscript: Subscription
  private meuObservableTesteSubscription : Subscription
  public oferta: Oferta
  

  constructor( 
    private route: ActivatedRoute, 
    private ofertasService: OfertasService
    ) {}

  ngOnInit() {
    this.route.snapshot
        .params['id']

    this.ofertasService
        .getOfertaPorId(this.route.snapshot.params['id'])
        .then((oferta: Oferta) => {
          this.oferta = oferta
        })

    /*
      1º exemplo
      //Montei o Observable, lembrando que tenho as opções com os parametros
      this.route.params.subscribe(

        (parametro: any) => { console.log(parametro) },
        (erro: any) => console.log(erro),
        () => console.log('Processamento foi ok')
        
      )  

      2º exemplo
      let tempo = interval(2000)
      tempo.subscribe( (resposta:number ) => console.log(resposta) )

    */        
   let tempo = interval(2000)

   this.tempoObservableSubscript = tempo.subscribe( (intervalo:number ) => console.log(intervalo) )

   let meuObservableTeste = Observable.create((observer: Observer<number>) => {
    
    //observer.next('Primeiro Evento da Stream')
    observer.next(1)
    observer.next(3)
    //observer.error('Algum erro foi encontrado na stream e evento.....')
    observer.complete()
    observer.next(5)

  })

    this.meuObservableTesteSubscription =   meuObservableTeste.subscribe(
        
        (resultado: any) => console.log(resultado + 10),
        (erro: string) => console.log(erro),
        () => console.log('Stream de eventos foi finalizada')
      )


  }

  ngOnDestroy(){
    this.meuObservableTesteSubscription.unsubscribe()
    this.tempoObservableSubscript.unsubscribe()
  }

}
