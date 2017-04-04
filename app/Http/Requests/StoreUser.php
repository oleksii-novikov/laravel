<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class StoreUser extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * @param Request $request
     * @return array
     */
    public function rules(Request $request)
    {
        $rules = [
            'name' => 'required',
            'email' => 'required|email|unique:users,email',
        ];
        switch ($this->method()) {
            case 'PUT':
            case 'PATCH': {
                $rules['email'] = ['required', Rule::unique('users')->ignore($request->get('id'), 'id')];
                //$rules['email'] = 'required|email|unique:users,email,' . $request->get('id');
            }
            default:
                break;
        }
        return $rules;
    }
}
