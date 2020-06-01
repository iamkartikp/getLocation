let displayLocation = document.querySelector('#displayLocation');
let btn = document.querySelector('#btn');
let inputImage = document.querySelector('#inputImage');
let image = document.querySelector('#output');
let caption = document.querySelector('#caption');
let displayCaption = document.querySelector('#displayCaption');
let displayDate = document.querySelector('#displayDate');

btn.addEventListener('click', ()=> {
    let d = new Date();
    let now = d.toLocaleTimeString();
    displayCaption.textContent = caption.value;
    displayDate.textContent = `Posted at: ${now}`;
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(myCurrentLocation);
    } else {
        displayLocation.innerHTML = 'Your Browser is not Supported!';
    }
    
})

async function myCurrentLocation(position) {
    const base = `https://geocode.xyz/${position.coords.latitude},${position.coords.longitude}?geoit=json`;

    const response = await fetch(base);
    const data = await response.json();

    console.log(data);
    displayLocation.textContent = `${data.city}, ${data.state}`;
}

inputImage.addEventListener('change', () => {
    // image.src = URL.createObjectURL(event.target.files[0]);
    image.setAttribute('src',URL.createObjectURL(event.target.files[0]));  
})
