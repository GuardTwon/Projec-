import {Component, Type} from '@angular/core'
import {UsuarioService} from '../services/usuario.service'
@Component({
    selector:'app-formulario',
    templateUrl: `./formulario.component.html`

})
export class  FormularioComponet {
    constructor(private usuarioServis:UsuarioService ){

    }
    public nombre: string ='';
    public apellido: string ='';
    public curp: string ='';
    public peso: number =0;
    public altura: number =0;
    public sexo: string ='';
    public zona: string ='';

    Guardar (){
        let datos={
            mombre:this.nombre,
            apellido:this.apellido,
            curp:this.curp,
            peso:this.peso,
            altura:this.altura,
            sexo:this.sexo,
            zona:this.zona
        }
        this.usuarioServis.crearUsuario(datos)
   
    }
}