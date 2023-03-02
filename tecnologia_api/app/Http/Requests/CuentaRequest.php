<?php

namespace App\Http\Requests;

use App\Models\Cuenta;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rule;

class CuentaRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        if ($this->method() == 'POST') {
            return [
                'correo' => 'required|email|unique:cuentas',
                'clave' => 'required|min:6',
            ];
        } else {
            return [
                'correo' => [
                    'required',
                    'email',
                    Rule::unique('cuentas', 'correo')->ignore($this->id, '_id'),
                    function ($attribute, $value, $fail) {
                        $usuario = Cuenta::where('correo', $value)->first();
                        if (!$usuario || $usuario->_id == $this->id) {
                            return true;
                        }
                        $fail('El correo ya está en uso.');
                    },
                ],
                'clave'=>'required',
            ];
        }
    }

    public function messages()
    {
        return [
            'correo.required' => 'El correo es requerido.',
            'correo.email' => 'El correo no es valido.',
            'correo.unique' => 'El correo ingresado ya esta registrado.',

            // validaciones para apellido
            'clave.required' => 'La clave es requerida.',
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
