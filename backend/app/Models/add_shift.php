<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
  
class add_shift extends Model
{
    use HasFactory;
    protected $table = 'shifttable';
  
    protected $fillable = [
        'number',
        'date',
        'time',
    ];

    public $timestamps = false;
}