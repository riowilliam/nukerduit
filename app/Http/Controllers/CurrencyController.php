<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\BaseController as BaseController;

class CurrencyController extends BaseController
{
    public function currencyExchange(Request $request){
        $fields = Validator::make($request->all(), [
            'amount' => 'required|integer',
            'from' => 'required|string',
            'to' => 'required|string',
        ]);

        if($fields->fails()){
            return $this->sendError('Validation Error.', $fields->errors(), 400);
        }

        $data = Http::withQueryParameters([
            'amount' => $request->amount,
            'from' => $request->from,
            'to' => $request->to,
            ])->get(config('currency.base_url') . "/latest");

        $content = $data->getBody()->getContents();

        $response = json_decode($content, true);

        return $this->sendResponse($response, 'Exchange amount successfully.');
    }
}
