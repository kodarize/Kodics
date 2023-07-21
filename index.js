document.getElementById('Frame').addEventListener( "load", function(e) {
    var ref1 = this.contentDocument.referrer;
    if((ref1.indexOf("www.youtube.com") > -1) && !(ref1.indexOf(".com/embed") > -1)){
        var videoId = getId(ref1);
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