import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Producto } from 'src/app/modelos/Producto';
import { ProductoService } from 'src/app/servicio/producto.service';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
  modelProducto=new Producto();

  constructor(private router:Router,private productoService:ProductoService) { }

  ngOnInit(): void {
  }

  guardar(producto:Producto){
    this.productoService.createProducto(producto).subscribe(data=>{
      this.router.navigate(['productos']);
    });
  }

}
