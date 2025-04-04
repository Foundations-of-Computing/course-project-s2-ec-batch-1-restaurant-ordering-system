 //initializing total price to 0
 let totalprice = 0;
//function to add an item to order list   
function order(itemName, itemprice)
 {
    // Create a new list item
    let itemlist = document.createElement("itemlist");

// set the text content to display item name and price
    itemlist.textContent = itemName + " - ₹" + itemprice;

// append the new item to order list
    document.getElementById("order_items").appendChild(itemlist);

    // Update total price
    totalprice += itemprice;

    // display the total price
    document.getElementById("total_price").textContent = totalprice;
}
 
// function to submit order
function submitorder() {
    // checking no items are selected
    if (totalprice === 0) {
        alert("Please select at least one item before submitting."); //alert user if cart is empty
    } else {
        alert("Order placed successfully! Total Amount: " + totalprice +"Rs"); // show confirmation message with total price
        
        // Clear cart after submission

        //remove all items
        document.getElementById("order_items").innerHTML = "";

        //reset price to 0
        document.getElementById("total_price").textContent = "0";
        totalprice = 0;
    }
}
