<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class CategoriaController extends Controller
{

    public function index()
    {
        $categoria = Categoria::all();
        return response()->json($categoria, 201);
    }

    public function store(Request $request)
    {
        $categoria = new Categoria();
        $categoria->nombre = $request->nombre;

        if ($request->hasFile('imagen')) {
            $imagen = $request->file('imagen');
            $nombreArchivo = uniqid() . '_' . $imagen->getClientOriginalName();
            $path = $imagen->storeAs('public/categorias', $nombreArchivo);
            $url = Storage::url($path);
            $categoria->imagen = $url;
            $categoria->save();
        }
        return response()->json(['categoria' => $categoria]);
    }

    public function destroy($id)
    {
        Categoria::destroy($id);
        return response()->json("Categoria eliminada con exito", 201);
    }

    public function update($id, Request $request)
    {
        $categoria = Categoria::findById($id);
        $categoria->nombre = $request->nombre;
        $categoria->imagen = $request->imagen;
        $categoria->save();
        return response()->json($categoria);
    }

}
