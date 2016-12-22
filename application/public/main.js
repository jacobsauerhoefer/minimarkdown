$(function () {
   
    var body_location = 'content.md';
                
    function getText(myUrl){
        var result = null;
        $.ajax( { url: myUrl, 
                    type: 'get', 
                    dataType: 'html',
                    async: false,
                    success: function(data) { result = data; } 
                }
        );
        FileReady = true;
        return result;
    }
    var markdown_source = getText(body_location);
    console.log(markdown_source);
    // // convert markdown to html
    // var output = md.toHTML( markdown_source );
    $('#editContent').val(markdown_source);

    var md = window.markdownit();
    // HOWTO: Render the xmp#markdown content as html
    $('#content').html(md.render(markdown_source));

    $(".editPage").click(function() {
        $(".contentForm").toggleClass("active");
    });

    // function saveMarkdown() {
    //     var data = $('#editContent').val();
    //     var result = null;
    //     $.ajax( { url: "/api/v1.0/saveMarkdown", 
    //                 type: 'post', 
    //                 data: data,
    //                 async: false,
    //                 success: function(data) { result = data; } 
    //             }
    //     );
    //     FileReady = true;
    //     return result;
    // }

    // $(".saveContent").on("click", saveMarkdown());

});