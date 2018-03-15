//Quote Generator JS
$(document).ready(function() {
    var quoteURL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&callback=";

    $("#get-quote").on("click", function() {
        $.ajaxSetup({ dataType: "jsonp" });
        $.getJSON(quoteURL, function(data) {
            if (data.quoteText.charAt(data.quoteText.trim().length - 1) !== "." && "!" && "?") {
                $("#twitter-quote").text("\"" + data.quoteText.trim() + ".\"");
            } else {
                $("#twitter-quote").text("\"" + data.quoteText.trim() + "\"");
            }
            if (data.quoteAuthor.length == 0) {
                $("#twitter-author").text("-Unknown");
            } else {
                $("#twitter-author").text("-" + data.quoteAuthor);
            }
        });
    });
});

//Send to Twitter
$("#tweet").on("click", function() {
    var varTwitterQuote = encodeURIComponent($("div#twitter-quote").text());
    var varTwitterAuthor = encodeURIComponent($("div#twitter-author").text());
    if (varTwitterAuthor.charAt(0) === " ") {
        window.open("https://twitter.com/intent/tweet?text=" + varTwitterQuote + "" + varTwitterAuthor);
    } else {
        window.open("https://twitter.com/intent/tweet?text=" + varTwitterQuote + " " + varTwitterAuthor);
    }
});
jQuery.ajaxPrefilter(function(options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});