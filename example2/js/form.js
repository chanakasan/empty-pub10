

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

    function toggle_details(type, is_checked)
    {
        var tag_id = '#'+type+'_details';

        if (is_checked === true)
        {
            $(tag_id).show('slow');
        }
        else {
            $(tag_id).hide('slow');
        }
    }
    // toggle journey details based on checked items
    function checkBoxChecked() {
        var single_trip = $("#single");
        var return_trip = $("#return");

        if (single_trip[0].checked && return_trip[0].checked) {
            toggle_details('return', true);
        }
        else if (single_trip[0].checked) {
            toggle_details('return', false);
        }
        else if (return_trip[0].checked) {
            toggle_details('return', false);
        }
        else {
            single_trip[0].checked = true;
            toggle_details('return', false);
        }
    }
    // hide return details
    $('#return_details').hide();
    // trigger checkBoxChecked()
    $("#single, #return").change(checkBoxChecked);
});