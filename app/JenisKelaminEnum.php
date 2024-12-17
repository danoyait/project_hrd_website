<?php

namespace App;

class JenisKelaminEnum
{
    const PRIA = 'PRIA';
    const PEREMPUAN = 'PEREMPUAN'; 

    public static function values(): array
    {
        return [
            self::PRIA,
            self::PEREMPUAN,
           
        ];
    }
}
