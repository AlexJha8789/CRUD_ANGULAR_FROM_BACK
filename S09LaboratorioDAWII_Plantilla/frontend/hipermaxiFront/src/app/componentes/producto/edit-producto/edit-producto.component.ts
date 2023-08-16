import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.css']
})
export class EditProductoComponent implements OnInit {
  producto: Producto=new Producto();

  constructor(private router:Router,private productoService:ProductoService) { }

  ngOnInit(): void {
    this.editar();
  }

  editar():void{
    let id=JSON.parse(localStorage.getItem('id') as string);
    this.productoService.getProductoId(id).subscribe(data=>{
      this.producto=data;
    });
  }

  actualizar(producto:Producto):void{
    this.productoService.updateProducto(producto).subscribe(data=>{
      this.producto=data;
      this.router.navigate(['productos']);
    });
  }

}
