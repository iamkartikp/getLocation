let displayLocation = document.querySelector('#displayLocation');
let btn = document.querySelector('#btn');
let inputImage = document.querySelector('#inputImage');
let image = document.querySelector('#output');
let caption = document.querySelector('#caption');
let displayCaption = document.querySelector('#displayCaption');
let displayDate = document.querySelector('#displayDate');

let d = new Date();
let now = d.toLocaleTimeString();

btn.addEventListener('click', ()=> {
    displayCaption.textContent = caption.value;
    displayDate.textContent = `Posted at: ${now}`;
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
