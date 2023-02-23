<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Activitylog extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'user_id',
        'ip',
        'Os',
        'device',
        'actName',
    ];
}
