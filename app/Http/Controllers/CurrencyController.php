<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\BaseController as BaseController;

class CurrencyController extends BaseController
{
    public function currencyExchange(Request $request){
        $data = Http::withQueryParameters([
            'amount' => $request->amount,
            'from' => $request->from,
            'to' => $request->to,
            ])->get(config('currency.base_url') . "/latest");

        $content = $data->getBody()->getContents();

        $response = json_decode($content, true);

        return $this->sendResponse($response, 'Exchange amount successfully.');
    }

    public function currencies(){
        $data = Http::get(config('currency.base_url') . "/currencies");

        $content = $data->getBody()->getContents();

        $response = json_decode($content, true);

        return $this->sendResponse($response, 'Gets a list of available currency symbols successfully.');
    }
}
