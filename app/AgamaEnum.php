<?php

namespace App;

class AgamaEnum
{
    const Islam = 'Islam';
    const Kristen_Protestan = 'Kristen Protestan';
    const Kristen = 'Kristen';
    const Katolik = 'Katolik';
    const Protestan = 'Protestan'; 
    const Hindu = 'Hindu'; 
    const Budha = 'Budha'; 
    const Konghucu = 'Konghucu'; 
    const Kejawen = 'Kejawen'; 

    public static function values(): array
    {
        return [
            self::Islam,
            self::Kristen_Protestan,
            self::Kristen,
            self::Katolik,
            self::Protestan,
            self::Hindu,
            self::Budha,
            self::Konghucu,
            self::Kejawen,
           
        ];
    }
}
