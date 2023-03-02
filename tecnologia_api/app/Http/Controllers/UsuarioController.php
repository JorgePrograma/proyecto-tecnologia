<?php

namespace App\Http\Controllers;

use App\Http\Requests\CuentaRequest;
use App\Http\Requests\UsuarioRequest;
use App\Models\Cuenta;
use App\Models\Usuario;
use Illuminate\Support\Facades\DB;

class UsuarioController extends Controller
{
    private $cuentaController;

    public function __construct(CuentaController $cuentaController)
    {
        $this->cuentaController = $cuentaController;
    }

    public function index()
    {
        $usuarios = Usuario::with('cuenta')->get();

        return response()->json([
            'data' => $usuarios,
        ], 200);
    }

    public function create(UsuarioRequest $request, CuentaRequest $requestCuenta)
    {
        $usuario = new Usuario();
        $usuario->tipo_dni = $request->tipo_dni;
        $usuario->numero_dni = $request->numero_dni;
        $usuario->nombre = $request->nombre;
        $usuario->apellido = $request->apellido;
        $usuario->direccion = $request->direccion;
        $usuario->celular = $request->celular;

        $cuenta = $this->cuentaController->create($requestCuenta);
        if ($cuenta === null) {
            return response()->json(['error' => 'No se pudo crear la cuenta'], 500);
        }

        $usuario->cuenta_id = $cuenta->id;
        $usuario->save();
        $usuario->load('cuenta');

        return response()->json([
            'message' => 'Se registro con exito',
            'data' => $usuario,
        ], 201);
    }

    public function delete($id)
    {
        $usuario = Usuario::find($id);

        if ($usuario) {
            DB::beginTransaction();

            try {
                $usuario->cuenta()->delete();
                $usuario->delete();

                DB::commit();

                return response()->json([
                    'message' => 'Usuario y cuenta eliminados correctamente',
                ]);
            } catch (\Exception$e) {
                DB::rollBack();
                return response()->json([
                    'message' => 'Error al eliminar usuario y cuenta',
                ], 500);
            }
        } else {
            return response()->json([
                'message' => 'Usuario no encontrado',
            ], 404);
        }
    }

}
