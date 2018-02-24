/* FOR LOCAL RSS FEED */

$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "feed.php",
        dataType: "xml",
        success: parseXML,
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert("RSS Feed " + errorThrown);
        }
    });
});
    
function parseXML(xml) {
    $(xml).find('item').each(function(){
         
            var title = $.trim( $(this).find('title').text());
            var link = $.trim( $(this).find('link').text());
            var description = $.trim( $(this).find('description').text());
            $('#external-feed').append(
                $("<li></li>").html(
                    $("<a/>").attr({
                        "href": link,
                        "target": "_blank"
                      }).text(title)
                    )
                );
    });
}

/* FOR EXTERNAL RSS FEED */

// var site = 'http://www.heraldsun.com.au/sport/rss';
// var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + site + '"') + '&format=xml';


//     $.get(yql).done(function (rss)
//     {
//       $(rss).find("item").each(function ()
//       {
//         var title = $.trim( $(this).find('title').text());
//         var link = $.trim( $(this).find('link').text());
//         var description = $.trim( $(this).find('description').text());
//         $('#external-feed').append(
//             $("<li></li>").html(
//                 $("<a/>").attr({
//                     "href": link,
//                     "target": "_blank"
//                   }).text(title)
//                 )
//             );
//       });
//     });