<?php

namespace App;

class JabatanEnum
{
    const Accounting_Manager = 'Accounting Manager';
    const Waiter = 'Waiter';
    const Waitress = 'Waitress';
    const Cook = 'Cook';
    const Cook_Helper = 'Cook Helper';
    const Admin = 'Admin';
    const Bartender = 'Bartender';
    const Bell_Driver = 'Bell Driver';
    const Staf_P_G ='Staf P&G';
    const Room_Atendant = 'Room Atendant';
    const Reception =  'Reception';
    const Staf_Scurity = 'Staf Security';
    const Chief_Security = 'Chief Security';
    const Engineering = 'Staf Engineering';
    const Koordinator_P_G = 'Koordinator P&G';
    const IT_Support = 'IT Support';
    const General_Manager = 'General Manager';
    const Junior_Sous_Chef = 'Junior Sous Chef';  
    const Engineering_Head = 'Engineering Head';
    const Purchasing = 'Purchasing'; 
    const HK_Head = 'HK Head';
    const HR_Coordinator = 'HR Coordinator';
    const Income_Auditor = 'Income Auditor';
    const Waiteries = 'Waiteries';
    const Kasir = 'Kasir';

    
   

    public static function values(): array
    {
        return [
            self::Accounting_Manager,
            self::Waiter,
            self::Waitress,
            self::Cook,
            self::Cook_Helper,
            self::Admin,
            self::Bartender,
            self::Bell_Driver,
            self::Staf_P_G,
            self::Room_Atendant,
            self::Reception,
            self::Staf_Scurity,
            self::Chief_Security,
            self::Engineering,
            self::Koordinator_P_G,
            self::IT_Support,
            self::General_Manager,
            self::Junior_Sous_Chef,
            self::Engineering_Head,
            self::Purchasing,
            self::HK_Head,
            self::HR_Coordinator,
            self::Income_Auditor,
            self::Waiteries,
            self::Kasir,
           
        ];
    }
}
