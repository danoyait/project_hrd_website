<?php

namespace App;

class AktifPensiunEnum
{
    const Aktif = 'Aktif';
    const Tidak_Aktif = 'non-aktif';
    const Pensiun = 'Pensiun'; 

    public static function values(): array
    {
        return [
            self::Aktif,
            self::Tidak_Aktif,
            self::Pensiun,
           
        ];
    }
}
