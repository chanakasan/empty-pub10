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

// jquery colorbox
    $(".iframe").colorbox({iframe:true, width:"60%", height:"100%"});
});