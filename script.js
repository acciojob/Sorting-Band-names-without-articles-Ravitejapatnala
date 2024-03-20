let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').toLowerCase();
}

touristSpots.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

document.querySelector('#bands').innerHTML =
  touristSpots.map(band => `<li>${band}</li>`).join('');