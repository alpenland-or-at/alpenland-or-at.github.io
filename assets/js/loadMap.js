if(getCookie("maptilerEnabled")==1){
    enableMap();
}

document.getElementById('placeHolderMap')
    .addEventListener('click', function (event) {
        if(event.target.id=='placeHolderMapMessage'||event.target.id=='placeHolderMap'){
            enableMap();
        }
        console.log(event.target.id);
});

function enableMap(){
    setCookie("maptilerEnabled", 1, 90);
    document.getElementById("placeHolderMap").style.display = "none";
    document.getElementById("map").style.display = "block";
    var map = new maplibregl.Map({
        container: 'map',
        style:
        'https://api.maptiler.com/maps/a467679a-5519-43b8-86df-7920a277afe1/style.json?key=74pFMmIQLPFiy342WaCT',
        center: [16.353,48.2145],
        zoom: 16
    });
    var el = document.createElement('div');
    el.id = 'marker';

    var nav = new maplibregl.NavigationControl();
    map.addControl(nav, 'top-left');
    var markerHeight = 35, markerRadius = 25, linearOffset = 25;
    var popupOffsets = {
    'top': [0, 0],
    'top-left': [0,0],
    'top-right': [0,0],
    'bottom': [0, -markerHeight],
    'bottom-left': [linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'bottom-right': [-linearOffset, (markerHeight - markerRadius + linearOffset) * -1],
    'left': [markerRadius, (markerHeight - markerRadius) * -1],
    'right': [-markerRadius, (markerHeight - markerRadius) * -1]
    };
    var popup = new maplibregl.Popup({ offset: 25, maxWidth:'350px' })
        .setHTML('<div class=mapPopUp><div class="mapAddressContainer"><img src="/assets/img/svg/wappen.svg"><address class="mapPopUp"> <h3>K.Ö.H.V. Alpenland</h3><p>Schlösselgasse 19/3</p><p>1080 Wien</p></address></div><a class="blueButton" href="https://maps.apple.com/maps?q=KÖHV+Alpenland" target="_blank"><img src="/assets/img/svg/route.svg">Routenplaner</a></div>');
    var marker = new maplibregl.Marker(el)
        .setLngLat([16.3529972,48.2139495])
        .setPopup(popup)
        .addTo(map);
    marker.togglePopup();

}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/" + ";SameSite=strict";
}
function getCookie(cookieName) {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [key,value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}