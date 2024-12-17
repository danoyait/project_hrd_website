<?php

namespace App;

class PendidikanEnum
{
    const SD = 'SD';
    const SMP = 'SMP';
    const SMA = 'SMA'; 
    const SMK = 'SMK'; 
    const D1 = 'D1'; 
    const D3 = 'D3'; 
    const S1 = 'S1'; 
    const S2 = 'S2'; 
    const S3 = 'S3'; 

    public static function values(): array
    {
        return [
            self::SD,
            self::SMP,
            self::SMA,
            self::SMK,
            self::D1,
            self::D3,
            self::S1,
            self::S2,
            self::S3,
           
        ];
    }
}
