<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::connection('mongodb')->create('usuarios', function (Blueprint $collection) {
            $collection->index('_id');
            $collection->enum('tipo_dni', ['CC', 'T.I', 'CE']);
            $collection->integer('numero_dni', false)->length(10)->unique();
            $collection->string('nombre', 50);
            $collection->string('apellido', 50);
            $collection->string('direccion', 50);
            $collection->integer('celular', false)->length(10);
            $collection->integer('cuenta_id');
            $collection->foreign('cuenta_id')->references('_id')->on('cuentas')->onDelete('cascade');
            $collection->timestamps();
        });
    }

    public function down(): void
    {
        Schema::connection('mongodb')->drop('usuarios');
    }
};
