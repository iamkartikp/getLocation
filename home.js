let displayLocation = document.querySelector('#displayLocation');
let btn = document.querySelector('#btn');
let inputImage = document.querySelector('#inputImage');
let image = document.querySelector('#output');

btn.addEventListener('click', ()=> {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(myCurrentLocation);
    } else {
        displayLocation.innerHTML = 'Your Browser is not Supported!';
    }
})

function myCurrentLocation(position) {
    displayLocation.textContent = 'Longitude: ' + position.coords.longitude + ' Latitude: ' + position.coords.longitude;
}

inputImage.addEventListener('change', () => {
    image.src = URL.createObjectURL(event.target.files[0]);
})