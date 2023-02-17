//Global functions
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const changelog = {
    "Changelog for D3adC0re OS v.0.2:": "!",
    "Added some blank menus in Settings app": "1",
    "Optimized OS": "2",
    "Disabled online services": "3",
    "Fixed bugs, caused by wrong files paths": "4",
    "Added confirmation screen for restart": "5",
}