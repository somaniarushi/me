fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${process.env.SPOTIFY_USER}&api_key=${process.env.LASTFM_KEY}&limit=1&nowplaying=true&format=json`)
 .then(response => response.json())
 .then(data => {
    let song = data.recenttracks.track[0]['name'];
    let artist = data.recenttracks.track[0]['artist']['#text'];
    let more_info = crunchData(data);
    let text = `At this very moment, I'm listening to "${song}" by ${artist}. Yes, I listen to a lot of pop.`;

    let songTitle = document.getElementById('song');
    songTitle.innerHTML = text;
 });