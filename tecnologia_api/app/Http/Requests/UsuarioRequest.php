<?php

namespace App\Http\Requests;

use App\Models\Usuario;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;

class UsuarioRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        if ($this->method() == 'POST') {
            return [
                'tipo_dni' => 'required|in:CC,T.I,CE',
                'numero_dni' => 'required|numeric|digits_between:8,12|unique:usuarios',
                'nombre' => 'required|string|max:50',
                'apellido' => 'required|string|max:50',
                'direccion' => 'required|string|max:50',
                'celular' => 'nullable|numeric|digits:10',
            ];
        } else {
            return [
                'tipo_dni' => 'required|in:CC,T.I,CE',
                'numero_dni' => [
                    'required',
                    'numeric',
                    'digits_between:8,12',
                    Rule::unique('usuarios', 'numero_dni')->ignore($this->id, '_id'),
                    function ($attribute, $value, $fail) {
                        $usuario = Usuario::where('numero_dni', $value)->first();
                        if (!$usuario || $usuario->_id == $this->id) {
                            return true;
                        }
                        $fail('El número de documento ya está en uso.');
                    },
                ],
                'nombre' => 'required|string|max:50',
                'apellido' => 'required|string|max:50',
                'direccion' => 'required|string|max:50',
                'celular' => 'nullable|numeric|digits:10',
            ];
        }
    }

    public function messages()
    {
        return [

            // validaciones para tipo dni
            'tipo_dni.required' => 'El tipo de documento es requerido',
            'tipo_dni.in' => 'El tipo de documento solo permite valores CC, T.I, CE',

            // validaciones para numero dni
            'numero_dni.required' => 'El numero de documento es requerido',
            'numero_dni.numeric' => 'El numero de documento solo permite valores numericos',
            'numero_dni.max_digits' => 'El numero de documento solo permite un maximo de 8 a 12 digitos',
            'numero_dni.unique' => 'El numero de documento ingresado ya esta registrada',

            // validaciones para apellido
            'nombres.required' => 'El apellido es requerido',
            'nombres.string' => 'El apellido debe de contener solo letras',
            'nombres.max' => 'El apellido solo permite un maximo de 50 caracteres',

            // validaciones para direccion
            'direccion.required' => 'La direccion es requerida',
            'direccion.string' => 'La direccion debe de contener solo letras',
            'direccion.max' => 'La direccion solo permite un maximo de 50 caracteres',

            // validaciones para celular
            'celular.numeric' => 'El celular debe ser de tipo numerico',
            'celular.max_digits' => 'El celular solo permite un maximo de 10 digitos',
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        throw new HttpResponseException(
            response()->json(['errors' => $validator->errors()], JsonResponse::HTTP_UNPROCESSABLE_ENTITY)
        );
        parent::failedValidation($validator);
    }
}
