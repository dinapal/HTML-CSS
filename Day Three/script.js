'use-strict';

jQuery(document).ready(function($){
    $('#filter_btn').on('click', function(e){
        e.preventDefault();
        var table = $('table.table');
        var tbody = $('.table-body');
        var rows = $('.table-body tr');
        // console.log(rows);
        rows.sort(function(a,b){
            var  A = $(a).eq(0).attr('data-sku').toLowerCase();
            var B = $(b).eq(0).attr('data-sku').toLowerCase();
           return A.localeCompare(B);
        }).appendTo(tbody);
    })
})

