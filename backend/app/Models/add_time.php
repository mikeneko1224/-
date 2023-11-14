<?php
  
namespace App\Models;
  
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
  
class add_time extends Model
{
    use HasFactory;
    protected $table = 'add_time';
  
    protected $fillable = [
        'name',
        'text',
        'date',
        'time',
    ];

    public $timestamps = false;
}