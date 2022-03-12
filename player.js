const width = "100%"

const height = "100%" //(width * 9/16)

var embed = new Twitch.Embed("twitch-embed", {
    width: width,
    height: height,
    channel: "Dropped",
    layout: "video",
    autoplay: false
});

embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
    var player = embed.getPlayer();
    player.play();
});