import { Component } from '@angular/core'

@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html',
    //OU
    //template: `<p>Sou outro Teste maluco</p>`
    styleUrls: ['./topo.component.css']
    
})

export class TopoComponent {
    public titulo: string = 'Aprender Inglês'
}