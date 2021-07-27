let publica = "e5aa1403018cf8a6fbf09c90bf032f84"
let temp = "1627422554572"
let hash = "007118e30e0d26cec1bb66fdd0a39bc7"

fetch(`http://gateway.marvel.com/v1/public/comics?ts=${temp}&apikey=${publica}&hash=${hash}&limit=6`)

.then((res) => {
    return res.json()
})

.then((dados) => {

    console.log(dados)

})

.catch((erro) => {
    console.log("seu erro foi" + erro)
})