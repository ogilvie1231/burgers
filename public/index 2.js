$(document).ready(function() {
    $('.devour').on('click', function(){
        var burgerId = $(this).data("id")



        $.ajax({
            url: "/burgers/" + burgerId,
            type: 'PUT',
            data: "devour=1",
            success: function(data) {
                window.location.reload()
            }
          });
        console.log('this: ', this)
        console.log('this: ', $(this).data("id"))
    })
}) 