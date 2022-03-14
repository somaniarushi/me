let userName="amksomani";
let apiKey="80f6445a8f5cb6abcde40082838af940";


fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`)
 .then(response => response.json())
 .then(data => {
    let song = data.recenttracks.track[0]['name'];
    let artist = data.recenttracks.track[0]['artist']['#text'];
    let text = `At this very moment, I'm listening to "${song}" by ${artist}. Yes, I listen to a lot of pop.`;

    let songTitle = document.getElementById('song');
    songTitle.innerHTML = text;
 });