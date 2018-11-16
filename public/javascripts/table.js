


var table = $('#example').DataTable( {
    columnDefs: [{
        targets: 1,
        render: function ( data, type, row ) {
            return type === 'display' && data.length > 10 ?
                 data.substr( 0, 20 ) +'…' :
                 data;
        }
    }],
    ajax: "http://localhost:3000/getProcessData",
} );
setInterval( function () {
    table.ajax.reload(); 
}, 30000 );



// setInterval(function(){
//     $.get("/getProcessData" , function(procData){
//         $(document).ready(function() {
//             $('#example').DataTable( {
//                 data: procData,
//                 columns: [
//                     { title: "Pid" },
//                     { title: "Command" },
//                     { title: "PCPU" },
//                     { title: "PMEM" },
//                 ]
//             } );
//         } ); 
//     });     
// },30000);






