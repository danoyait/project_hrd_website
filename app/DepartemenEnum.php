<?php

namespace App;

class DepartemenEnum
{
    const Housekeeping = 'Housekeeping';
    const F_n_B_departemen = 'F n B departemen';
    const Engineering = 'Engineering';
    const HRD = 'HRD';
    const Houskeeping = 'Houskeeping';
    const F_B_service = 'F&B Service';
    const Pemasaran_Media_Sosial = 'Pemasaran Media Sosial';
    const F_B_Product ='F&B Product';
    const Front_Office = 'Front Office';
    const Security =  'Security';
    const IT = 'IT';
    const Accounting = 'Accounting';
    const Back_Office = 'Back Office';
    const Kitchen = 'Kitchen';
    const Pool_and_Garden = 'Pool and Garden';
    const Pool_Garden = 'Pool & Garden';

    
   

    public static function values(): array
    {
        return [
            self::Housekeeping,
            self::F_n_B_departemen,
            self::Engineering,
            self::F_B_service,
            self::Pemasaran_Media_Sosial,
            self::F_B_Product,
            self::Front_Office,
            self::Security,
            self::IT,
            self::Accounting,
            self::Back_Office,
            self::Kitchen,
            self::Pool_Garden,
            self::Pool_and_Garden,
            self::HRD,
           
        ];
    }
}
