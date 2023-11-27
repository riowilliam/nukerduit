<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Http\Controllers\BaseController as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TransactionController extends BaseController
{
    public function find(Request $request)
    {
        $query = Transaction::query();

        if ($request->has('code')) {
            $query->where('currency', $request->input('code'));
        }

        if ($request->has('start_date') && $request->has('end_date')) {
            $query->whereBetween('created_at', [$request->input('start_date'), $request->input('end_date')]);
        }

        if ($request->has('time')) {
            if ($request->input('time') === 'now') {
                $currentDate = now();
                $query->whereDate('created_at', $currentDate);
            }

            if ($request->input('time') === 'week') {
                $previousWeekStartDate = now()->subWeek()->startOfDay();
                $previousWeekEndDate = now()->endOfDay();
                $query->orWhereBetween('created_at', [$previousWeekStartDate, $previousWeekEndDate]);
            }

            if ($request->input('time') === 'month') {
                $previousMonthStartDate = now()->subMonth()->startOfDay();
                $previousMonthEndDate = now()->endOfDay();
                $query->orWhereBetween('created_at', [$previousMonthStartDate, $previousMonthEndDate]);
            }
        }

        $transactions =  $query->select('currency')
            ->selectRaw('SUM(buy) as total_buy')
            ->selectRaw('SUM(sell) as total_sell')
            ->selectRaw('SUM(buy - sell) as available_amount')
            ->groupBy('currency')
            ->get();

        return $this->sendResponse($transactions, 'Find currency amount successfully.');
    }

    public function create(Request $request)
    {
        $fields = Validator::make($request->all(), [
            'currency' => 'required|string',
            'buy' => 'required|integer',
            'sell' => 'required|integer',
            'status' => 'required|string',
        ]);

        if($fields->fails()){
            return $this->sendError('Validation Error.', $fields->errors(), 400);
        }

        $transaction = Transaction::create([
            'currency' => $request['currency'],
            'buy' => $request['buy'],
            'sell' => $request['sell'],
            'status' => $request['status'],
        ]);

        return $this->sendResponse($transaction, 'Transaction successfully.');
    }
}
