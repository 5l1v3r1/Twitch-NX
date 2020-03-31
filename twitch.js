function start()
{
    var user_address = document.getElementById("streamer_name");
    new Twitch.Embed("twitch-embed", {
        width: 854,
        height: 480,
        channel: user_address.value,
        // only needed if your site is also embedded on embed.example.com and othersite.example.com 
        parent: ["embed.example.com", "othersite.example.com"]
    });
}