<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Usuario extends Model
{
    use HasFactory;

    protected $connection = 'mongodb';

    protected $fillable = [
        'tipo_dni',
        'numero_dni',
        'nombre',
        'apellido',
        'direccion',
        'celular',
    ];

    public function cuenta()
    {
        return $this->belongsTo(Cuenta::class);
    }
}
