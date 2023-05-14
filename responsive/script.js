function submit() {

    const name = document.getElementsByClassName('inp_name')[0].value;
    const email = document.getElementsByClassName('inp_email')[0].value;
    const mobile = document.getElementsByClassName("inp_mobile")[0].value;
    const item_name = document.getElementsByClassName("inp_item")[0].value;
    const quantity = document.getElementsByClassName("inp_quantity")[0].value;
    const address = document.getElementsByClassName("inp_address")[0].value;
    const price = document.getElementsByClassName("inp_price")[0].value;

    axios.post('https://food-service-server.vercel.app/order/buy', {
        name: name,
        email: email,
        mobile: mobile,
        price: price,
        item_name: item_name,
        quantity: quantity,
        addres: address
    }).then((res) => {
        alert(' you Order is succesfully  Done')
        window.location = '/'
    }).catch((err) => {
        alert("Error")
    })
}