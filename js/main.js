function initMap() {
    const myLatLng = {
        lat: 37.782293,
        lng: -122.391240
    }
    const map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: myLatLng,
            scrollwheel: false,
            zoom: 18
        }
    );
    const marker = new google.maps.Marker({
        // position은 마커의 위치
        position: myLatLng,
        map: map,
        title: 'GitHub'
    });

}