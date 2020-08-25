$.import("xsjs","dataconf");
var limitnum = $.xsjs.dataconf.limitnum;
var map = $.xsjs.dataconf.map;


function getSqlById(id, pageno,filter){
    var startnum = ( pageno - 1 ) * limitnum;
    var sql = map[id].sql;
    var filters = map[id].where + "'" + filter + "' ";
    var orderby = map[id].orderby;
    sql = sql + filters + orderby +' LIMIT ' + limitnum + ' OFFSET ' + startnum;
    return sql;
    
}

function sqlQuery(query){
    var conn = $.hdb.getConnection(); 
    var rs = conn.executeQuery(query);
    conn.close();
    var  tblschedule = []; 
    var iterator = rs.getIterator();
    while(iterator.next()){
        tblschedule.push(iterator.value());
    }
    return tblschedule;
}