$(function() {
    $('.summary').hide();
    $('.cdata-overlay').hide();

    $("#checkout").click(function() {
        let size = $("#size option:selected").val();
        let crust = $("#crust option:selected").val();
        let topping = $("#toppings option:selected").val();
        let number = $("#number").val();
        console.log(size);


        let order = (s, c, t, n, total) => {
            return { s, c, t, n, total };
        };


        let price, totalPrice;
        switch (size) {
            case size = "regular":
                price = 800;
                if (crust === "crispy") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "stuffed") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "gluten-free") {
                    totalPrice = (price * number) + 180;
                } else {
                    totalPrice = (price * number) + 200;
                }
                break;
            case size = "medium":
                price = 1000;
                if (crust === "crispy") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "stuffed") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "gluten-free") {
                    totalPrice = (price * number) + 180;
                } else {
                    totalPrice = (price * number) + 200;
                }
                break;
            case size = "large":
                price = 1200;
                if (crust === "crispy") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "stuffed") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "gluten-free") {
                    totalPrice = (price * number) + 180;
                } else {
                    totalPrice = (price * number) + 200;
                }
                break;
        }
        switch (topping) {
            case topping = "olives":
                totalPrice = totalPrice + 120;
                break;
            case topping = "garlic":
                totalPrice = totalPrice + 80;
                break;
            case topping = "tomato":
                totalPrice = totalPrice + 80;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 80;
                break;
            case topping = "onion":
                totalPrice = totalPrice + 80;
                break;
            case topping = "green pepper":
                totalPrice = totalPrice + 120;
                break;

        }


        let newOrder = order(size, crust, topping, number, totalPrice);
        console.log(newOrder);




        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Size :   " +
            newOrder.s + "<br>" + "Crust :     " +
            newOrder.c + "<br>" + "Toppings :     " +
            newOrder.t + "<br>" + " Number of pizzas :    " +
            newOrder.n + "<br>" + "Total Price :  " +
            newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });


    $(".deliver").click(function() {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });



    $(".delivernot").click(function() {

    });


    $(function() {
        $.scrollify.move('#sum-order');
    });
});