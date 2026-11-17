//Documet Object Manipulation (DOM) Somenye o JavaScript consegue fazer a manipulaaco desses objetos.


// capturadores de elementos são as funções:
//1. innerText  >> só tras textos visiveis
// 2. innerHTML  >> traz todo o conteúdo HTML, inclusive tags
//3.  innerContent >> traz todo o conteúdo, incluindo tags e textos


// inserir conteudo:
// body.innerText = "novo conteudo", só texto
//body.innerHTML = "<h1>texto com tag<h1>"

// Selecionadores de Elementos

//const div = window.document.getElementById("message")

// const src = prompt("Insira a Imagem")
// const link = prompt("Destino do Click")

// div.innerHTML = 
 //    <a> href=$(link)
 //     <img src=${src} />
  //    </a>


// const fotos = ["foto.jpg", "foto1.jpg"]

// let listaFotos =""
// for (foto of fotos){
   //  `<img src=$(foto) />`
// }
//-----------------------------------------------------------------------------------------------------------------------------

const divGaleria = window.document.getElementById("galeria")   // prieiro passo é conectat com o HTML

// function builtImage(src, link){
 //    const image = `
 //    <a>
   //      <img src=$(src) />
  //       </a>
 //    `
 //   return image
// }

function buildImage(src, link) {
    const a = document.createElement("a")
    a.href = link
    a.target = "_blank"

    const img = document.createElement("img")
    img.setAttribute("src", src)
    img.setAttribute("style", "border-radius: 50px")
    img.removeAttribute("alt")

    a.appendChild(img)
    return a
}


function showImage(local, src, link) {
    local.appendChild(builtImage(src, link))
    return 
}

const dataImage = {
    src: "apple.jpg",
    link: "https://google.com"
}

const {src, link} = dataImage


showImage(divGaleria, src, link)

// Card de Produto//
// titulo, descrição, imagem, preço