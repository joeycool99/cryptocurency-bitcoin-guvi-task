// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {

//         return res.json()
//     })
//     .then(data => {

//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })

bitcoin = document.getElementById("bitcoin")
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        var fin = (Math.trunc(data.ticker.price))

        bitcoin.append(`$${fin}`)

    } catch (e) {
        return ("SOMETHING WENT WRONG!!!", e)
    }
}

fetchBitcoinPrice()
