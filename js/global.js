//Global functions
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

const changelog = {
    "Changelog for D3adC0re OS v.0.3:": "!",
    "Added blank Wallpaper menu in Settings app": "1",
    "Optimized OS": "2",
    "Kinda changed design": "3",
    "Maked neofetch better": "4",
    "Added 'komaru' command": "5",
    "Preloader remake": "6"
}