<?php

namespace App\Http\Controllers;

use App\Http\Requests\CuentaRequest;
use App\Models\Cuenta;

class CuentaController extends Controller
{
    public function index()
    {
    }

    public function create(CuentaRequest $request)
    {
        $cuenta = new Cuenta();
        $cuenta->correo = $request->correo;
        $cuenta->clave = $request->clave;
        $cuenta->save();
        return $cuenta;
    }

    public function update(CuentaRequest $request, Cuenta $cuenta)
    {
    }

    public function destroy(Cuenta $cuenta)
    {
    }

}
