var submit = $("button");
var inputField = $("input");
var menuType = $("select");
var listContainer = $("#listContainer");
var selectType
submit.on('click', function(){
    var artistName = inputField.val();
    selectType = menuType.val();

    $.ajax({
      url: "https://api.spotify.com/v1/search",
      data: {
            q: artistName,
            type: selectType
        },
      success: insertHTML
    });

});

function insertHTML(artistInfo){
    console.log(selectType)
    var items
    if (selectType == "artist"){
        items = artistInfo.artists.items;
    }
    if (selectType == "album"){
        items = artistInfo.albums.items;
    }
    for (var i = 0; i < items.length; i++){
        var artistName = items[i].name;
        var images = items[i].images;

        if (images.length >= 3){
            var imageURL = items[i].images[2].url;
            listContainer.append('<div> <img src=' + imageURL + '>' + artistName + '</div>');
        }
    }
}
