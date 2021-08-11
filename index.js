let publica = "e5aa1403018cf8a6fbf09c90bf032f84"
let temp = "1627422554572"
let hash = "007118e30e0d26cec1bb66fdd0a39bc7"

fetch(`http://gateway.marvel.com/v1/public/characters?ts=${temp}&apikey=${publica}&hash=${hash}&limit=10`)

.then((res) => {
    return res.json()
})


.then((heroes) => {
    console.log(heroes)

    heroes.data.results.forEach(element => {

        let caminho = element.thumbnail.path + '.' + element.thumbnail.extension;
        let nome = element.name





        let personagem = (caminho, nome) => {


            let div = document.querySelector('#hero');
            let img = document.createElement('img');
            img.setAttribute('src', caminho);
            div.appendChild(img);




            let txt = document.createElement('div')
            let p = document.createElement('p')
            txt.appendChild(p)
            txt.classList.add("text")
            p.innerHTML = nome
            div.appendChild(txt)









        }
        personagem(caminho, nome)





    })





})





.catch((erro) => console.log("seu erro foi" + erro))