let userName="amksomani";
let apiKey="80f6445a8f5cb6abcde40082838af940";

let i = 0;

fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=10&nowplaying=true&format=json`)
 .then(response => response.json())
 .then(data => {
    let song = data.recenttracks.track[i]['name'];
    let artist = data.recenttracks.track[i]['artist']['#text'];

    let underline_song = `<i>${song}</i>`;
    let text = `⏰ Recently, I'm listening to ${underline_song} by ${artist}.`;

   let songTitle = document.getElementById('song');
   songTitle.innerHTML = text;

   // Change song every 3 seconds
   setInterval(() => {
       i++;
       // Wrap i
      if (i > 4) {
         i = 0;
      }
       song = data.recenttracks.track[i]['name'];
       artist = data.recenttracks.track[i]['artist']['#text'];
       let underline_song = `<i>${song}</i>`;
       text = `⏰ Recently, I'm listening to ${underline_song} by ${artist}.`;
       songTitle.innerHTML = text;
    }, 3000);

 });