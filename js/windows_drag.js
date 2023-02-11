//Terminal drag
function window_draggable_terminal() {
    $('#appwindow_terminal').draggable( );
    $('#appwindow_terminal').draggable( 'option', 'scroll', false );
    $('#appwindow_terminal').draggable( 'option', 'snap', false );
    $('#appwindow_terminal').draggable( "option", "cursor", "move" );
    $('#appwindow_terminal').draggable( 'disable' );
    $('#appwindow_terminal').on( 'drag', function( event, ui ) {} );
    $('#appwindow_terminal').draggable({
        drag: function( event, ui ) {
            ui.position.left = Math.max( ui.position.left, -28 );
            ui.position.top = Math.max( ui.position.top, -20 );
        }
    });
}
function topbar_enter() {
    $('#appwindow_terminal').draggable( "enable" );
}
function topbar_leave() {
    $('#appwindow_terminal').draggable( "disable" );
}
document.addEventListener("DOMContentLoaded", window_draggable_terminal);



//Just Ice drag
function window_draggable_justice() {
    $('#appwindow_justice').draggable( );
    $('#appwindow_justice').draggable( 'option', 'scroll', false );
    $('#appwindow_justice').draggable( 'option', 'snap', false );
    $('#appwindow_justice').draggable( "option", "cursor", "move" );
    $('#appwindow_justice').draggable( 'disable' );
    $('#appwindow_justice').on( 'drag', function( event, ui ) {} );
    $('#appwindow_justice').draggable({
        drag: function( event, ui ) {
            ui.position.left = Math.max( ui.position.left, -38 );
            ui.position.top = Math.max( ui.position.top, -10 );
        }
    });
}
function topbar_enter_justice() {
    $('#appwindow_justice').draggable( "enable" );
}
function topbar_leave_justice() {
    $('#appwindow_justice').draggable( "disable" );
}
document.addEventListener("DOMContentLoaded", window_draggable_justice);



//Just Ice drag
function window_draggable_settings() {
    $('#appwindow_settings').draggable( );
    $('#appwindow_settings').draggable( 'option', 'scroll', false );
    $('#appwindow_settings').draggable( 'option', 'snap', false );
    $('#appwindow_settings').draggable( "option", "cursor", "move" );
    $('#appwindow_settings').draggable( 'disable' );
    $('#appwindow_settings').on( 'drag', function( event, ui ) {} );
    $('#appwindow_settings').draggable({
        drag: function( event, ui ) {
            ui.position.left = Math.max( ui.position.left, -38 );
            ui.position.top = Math.max( ui.position.top, -10 );
        }
    });
}
function topbar_enter_settings() {
    $('#appwindow_settings').draggable( "enable" );
}
function topbar_leave_settings() {
    $('#appwindow_settings').draggable( "disable" );
}
document.addEventListener("DOMContentLoaded", window_draggable_settings);