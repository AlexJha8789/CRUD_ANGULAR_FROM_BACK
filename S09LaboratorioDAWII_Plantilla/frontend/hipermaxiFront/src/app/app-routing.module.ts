import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductoComponent } from './componentes/producto/add-producto/add-producto.component';
import { EditProductoComponent } from './componentes/producto/edit-producto/edit-producto.component';
import { ListarProductoComponent } from './componentes/producto/listar-producto/listar-producto.component';

const routes: Routes = [
  {path:'productos', component:ListarProductoComponent},
  {path:'nuevoProducto',component:AddProductoComponent},
  {path:'editarProducto',component:EditProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
