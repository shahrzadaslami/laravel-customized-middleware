<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Activitylog;
class ActivityLogger
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        Activitylog::create([
            'name' => 'namee',
            'user_id' => '1',
            'ip' => '1.1.1.1',
            'Os' => 'oss',
            'device'=> 'mobile',
            'actName'=> "actName",
        ]);
        


        return $next($request);
    }
}
