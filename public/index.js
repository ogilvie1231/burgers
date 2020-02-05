$(document).ready(function() {
    $('.devour').on('click', function() {
        var burgerId = $(this).data("id")
        var devoured = $(this).data("devoured")
        var devour = devoured === 0 ? 1 : 0


        $.ajax({
            url: "/burgers/" + burgerId,
            type: 'PUT',
            data: { devour },
            success: function(data) {
                window.location.reload()
            }
        });
        console.log('this: ', this)
        console.log('this: ', $(this).data("id"))
    })
    $(".createForm").on('submit', function(event) {
        event.preventDefault();

        var burger_name = $('#burg').val().trim();

        $.post("/burgers", { burger_name }, function() {
            location.reload();
        });

    });
});