$(document).ready(function () {
    /* DataTable initialisation */
    $('#list1').dataTable({
        "sDom": "<'row'<'col-lg-10 col-offset-1'i>>" +
            "<'row'<'col-lg-10 col-offset-1'f>>" +
            "<'row'<'col-lg-10 col-offset-1'l>>" +
            "<'row'<'col-lg-10 col-offset-1't>>" +
            "<'row'<'col-lg-10 col-offset-1'p>>",

        "sPaginationType": "bootstrap",
        "oLanguage": {
            "sLengthMenu": "_MENU_ items per page"
        }
    });

    /* Colorbox */
    $('.iframe').colorbox({width: "70%", height: "80%", iframe: true});

    /* Update pending count */
    var pending_count = $('#list1 .warning').length;
    $('#pending').text(pending_count);

    /* Update status */
    $('.approve').on('click', function () {
        var row = $(this).closest('tr')
        $(row).attr('class', 'success');
        return false;
    });
    $('.decline').on('click', function () {
        var row = $(this).closest('tr')
        $(row).addClass('danger');
        return false;
    });

    /* Nav pills */
    $('ul.nav li').on('click', function(){
        $('ul.nav li').removeClass('active');
        $(this).addClass('active');
        return false;
    });
});