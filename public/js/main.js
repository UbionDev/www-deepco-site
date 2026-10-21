$(document).ready(function() {
    //화면분할
    if( $(this).width() >=  1200 ) {
        $("#content-wrapper").kendoSplitter({
            panes: [{
                min:"500px",
                resizable: true
            }, {
                min:"480px",
                size:"30%",
                collapsible: true,
                scrollable: false
            }]
        });
    } else {
        $("#content-wrapper").kendoSplitter({
            panes: [{
                min:"0",
                size:"100%",
                toggle: true,
                resizable: false,
                collapsible: true
            }, {
                min:"0",
                size:"100%",
                resizable: false
            }]
        });
    }
});
