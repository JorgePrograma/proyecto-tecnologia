<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::connection('mongodb')->create('cuentas', function (Blueprint $collection) {
            $collection->index('_id');
            $collection->string('correo', 254)->unique();
            $collection->string('clave',150);
            $collection->timestamps();
        });
    }

    public function down(): void
    {
        Schema::connection('mongodb')->drop('cuentas');
    }

    /*


Table cuentas{
  id int [pk]
  correo varachar(200)
  clave varchar(200)
}

Table usuarios{
  id int [pk]
  tipo_dni varchar(10)
  numero_dni varchar(10)
  nombre varchar(100)
  apellido varchar(100)
  celular int(10)
  fecha_nacimiento date
  cuentas_id int
}
Ref:cuentas.id - usuarios.cuentas_id

Table categorias{
  id int [pk]
  nombre varchar(50)
}

Table marcas{
  id int [pk]
  nombre varchar(50)
}

Table productos{
  id int [pk]
  nombre varchar(100)
  descripicion varchar(200)
  precio decimal(15,3)
  cantidad int(10)
  categoria_id int
  marca_id int
}
Ref:categorias.id < productos.categoria_id
Ref:marcas.id > productos.marca_id

Table compra{
  id int [pk]
  precio int(15,2)
  producto_id int
  usuario_id int
  fecha datetime
}
Ref:usuarios.id < compra.usuario_id
Ref:productos.id <> compra.id
*/
};
