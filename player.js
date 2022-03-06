const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
var height = (width * 9/16)

var embed = new Twitch.Embed("twitch-embed", {
    width: width,
    height: height,
    channel: "Mande",
    layout: "video",
    autoplay: false
  });

  embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
    var player = embed.getPlayer();
    player.play();
  });