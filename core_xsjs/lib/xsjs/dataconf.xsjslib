var limitnum = 1000;

var map = {
   
    EC_USER:{
        table:'"TP_HANA_DataService.HANADB.ZEC::ZTAB_EC_ORG_UNIT"',
        sql:'select * FROM "TP_HANA_DataService.HANADB.ZEC::ZTAB_EC_ORG_UNIT"',
        where:'where TAB_LASTMODIFIED_TIME >=',
        orderby:'ORDER BY USERID,TAB_LASTMODIFIED_TIME DESC'
    } 
};