$(document).ready(function(){
        $("#button").click(function(){
            var addItem=$('input[name=ItemList]').val();
            $("ol").append('<li>'+addItem+'</li>');
            $("#Item").val("");
        })
        $('form').on('submit', function(e){
            e.preventDefault();
    })
    $(document).on('click','li', function(){
        $(this).toggleClass('strike');
    })
})

