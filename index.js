document.getElementById('Frame').addEventListener( "load", function(e) {
    if(this.contentWindow.location.includes("www.youtube.com") && !this.contentWindow.location.includes(".com/embed")){
        var videoId = getId(this.contentWindow.location);
        this.src = "https://www.youtube.com/embed/" + videoId;
    };
} );

function getId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11)
    ? match[2]
    : null;
}