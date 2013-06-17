

$(document).ready(function(){
// jquery chosen
    var config = {
        '.chzn-select'           : {},
    '.chzn-select-deselect'  : {allow_single_deselect:true},
    '.chzn-select-no-single' : {disable_search_threshold:10},
    '.chzn-select-no-results': {no_results_text:'Oops, nothing found!'},
    '.chzn-select-width'     : {width:"95%"}
    }
    for (var selector in config) {
        $(selector).chosen(config[selector]);
    }

// start.html
    $('#showForm').click(function() {
        var journey = $('#noofdays').val();
        var filename = journey+'.html';
        // jquery colorbox
        $.colorbox({width:"60%", height:"100%", iframe:true, href:filename});
    });


    function toggle_journey(type, is_checked)
    {
        var tag_id = '#'+type+'_details';

        if (is_checked === true)
        {
            $(tag_id).show();
        }
        else {
            $(tag_id).hide();
        }
    }

    // hide return details
    $('#return_details').hide().slideDown();


    //toggle single journey checkbox
    $("#single").change(function(){
        var type = $(this).val();
        var is_checked = $(this).is(':checked');

        toggle_journey(type, is_checked);
    });

    $('#single').mousedown(function() {
        $(this).trigger("change");
    });

    //toggle single journey checkbox
    $("#return").change(function(){
        var type = $(this).val();
        var is_checked = $(this).is(':checked');

        var single_isChecked = $('#single').is(':checked');
        if (single_isChecked === false)
        {
            type = 'pickup';
        }

        toggle_journey(type, is_checked);
    });

    $('#return').mousedown(function() {
        $(this).trigger("change");
    });

});