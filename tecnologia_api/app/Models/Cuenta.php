<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;

class Cuenta extends Model
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $fillable = [
        'correo',
        'clave',
    ];

    public function usuario()
    {
        return $this->hasOne(Usuario::class);
    }
}
