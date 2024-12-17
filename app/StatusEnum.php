<?php

namespace App;

class StatusEnum
{
    const Kontrak = 'Kontrak';
    const Staff = 'Staff';
    const DW = 'DW'; 

    public static function values(): array
    {
        return [
            self::Kontrak,
            self::Staff,
            self::DW,
           
        ];
    }
}
