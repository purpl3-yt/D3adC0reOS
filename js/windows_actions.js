//Open/Close terminal
function close_window_terminal() {
    document.getElementById("appwindow_terminal").classList.add("appwindow_hidden");
    document.getElementById("appwindow_terminal").classList.remove("appwindow_shown");
    document.getElementById("pgtitle").innerHTML = "D3adC0re OS";
}
function open_window_terminal() {
    hidesmenu()
    document.getElementById("appwindow_terminal").classList.add("appwindow_shown");
    document.getElementById("appwindow_terminal").classList.remove("appwindow_hidden");
    document.getElementById("pgtitle").innerHTML = "D3adC0re OS - T3rm1nal";
}

//Open/Close Just Ice
function close_window_justice() {
    document.getElementById("appwindow_justice").classList.add("appwindow_hidden");
    document.getElementById("appwindow_justice").classList.remove("appwindow_shown");
    document.getElementById("pgtitle").innerHTML = "D3adC0re OS";
}
function open_window_justice() {
    hidesmenu()
    document.getElementById("appwindow_justice").classList.add("appwindow_shown");
    document.getElementById("appwindow_justice").classList.remove("appwindow_hidden");
    document.getElementById("pgtitle").innerHTML = "D3adC0re OS - Just Ice";
}

//Open/Close Settings
function close_window_settings() {
    document.getElementById("appwindow_settings").classList.add("appwindow_hidden");
    document.getElementById("appwindow_settings").classList.remove("appwindow_shown");
    document.getElementById("pgtitle").innerHTML = "D3adC0re OS";
}
function open_window_settings() {
    hidesmenu()
    document.getElementById("appwindow_settings").classList.add("appwindow_shown");
    document.getElementById("appwindow_settings").classList.remove("appwindow_hidden");
    document.getElementById("pgtitle").innerHTML = "D3adC0re OS - Settings";
}