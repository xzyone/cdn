const apBottom = new APlayer({
    container: document.getElementById('aplayerBottom'),
    lrcType: 3,
    fixed: true,
    audio: [{
        name: '愿得一心人',
        artist: '周深',
        url: 'https://cdn.jsdelivr.net/gh/xzyone/cdn@master/ydyxr.mp3',
        cover: 'https://cdn.jsdelivr.net/gh/xzyone/cdn@master/ydyxr.jpg',
        lrc: 'https://cdn.jsdelivr.net/gh/xzyone/cdn@master/ydyxr.lrc'
    }]
});
apBottom.lrc.hide();
