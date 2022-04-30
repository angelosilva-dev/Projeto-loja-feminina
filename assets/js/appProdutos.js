// Pegando a categoria passada por parametro na pagina index.html
const parametros = new URLSearchParams(window.location.search)
let nomeParametros = null
if(parametros != null){
    nomeParametros = parametros.get('categoria')
}



// Declaração de variaveis dos elementos HTML
const contadorProdutos = document.getElementById('contador-de-produtos')
const ordenacaoProdutos = document.querySelector('#ordenacao-produtos')
const menuCategorias = document.querySelector('.dropdown-menu')
const secaoProdutos = document.querySelector('.produtos')

function mostrarTodosProdutos(produtos) {
    
    // atribuindo ao elemento secaoProdutos os itens de produtos 
    secaoProdutos.innerHTML = '<div class="col-3"'
    let count = 0;

    for (let currentItem = 0; currentItem < produtos.length; currentItem++) {

        secaoProdutos.innerHTML += `
        <div class="col-3">
            <img src="${produtos[currentItem].img}" class="img-fluid" alt="${produtos[currentItem].descricao}">
            <h6>${produtos[currentItem].descricao}</h6>
            <p>R$ ${produtos[currentItem].preco}</p>
            <span>${produtos[currentItem].parcelamento}</span>
            <div class="d-flex justify-content-center">
                <button>Comprar <i class="fa-brands fa-whatsapp"></i></button>
            </div>
        </div>
        `
        count++
    }

    secaoProdutos.innerHTML += '</div>'
    contadorProdutos.textContent = `Todos os produtos(${count} produtos)`

    return secaoProdutos   
}

function filtrarProdutos(filtro){
    let filtroSelecionado = filtro
    let valorFiltro = ''

    let itensFiltrados = undefined

    if(filtroSelecionado == 'desejados'){
        valorFiltro = 'S'
        itensFiltrados = produtos.filter(function(produtos){
            if(produtos.desejado === valorFiltro){
                return produtos
            }
        })
    }else if(filtroSelecionado == 'ofertas'){
        valorFiltro = 'S'
        itensFiltrados = produtos.filter(function(produtos){
            if(produtos.oferta === valorFiltro){
                return produtos
            }
        })
    }else if(filtroSelecionado == 'maiorpreco'){
        itensFiltrados = produtos.filter(function(produtos){
            return produtos
        })

        itensFiltrados.sort((function(a,b){
                    if(a.preco > b.preco){
                        console.log(a.preco)
                        return -1
                    }else{
                        return true
                    }        
        }))
    }else if(filtroSelecionado == 'menorpreco'){
        itensFiltrados = produtos.filter(function(produtos){
            return produtos
        })

        itensFiltrados.sort((function(a,b){
                    if(a.preco < b.preco){
                        console.log(a.preco)
                        return -1
                    }else{
                        return true
                    }
                        
        }))
    }else{
        itensFiltrados = produtos.filter(function(produtos){
            if(filtroSelecionado == produtos.categoria)
            return produtos
        })
    }
    
    mostrarTodosProdutos(itensFiltrados)
}

ordenacaoProdutos.addEventListener("change",function(){

    let itemSelecionado = ordenacaoProdutos.value
    filtrarProdutos(itemSelecionado)
})

window.addEventListener("DOMContentLoaded",function(){
    carregaCategorias(produtos)
    if(nomeParametros == null){
        mostrarTodosProdutos(produtos)
    }else{
        filtrarProdutos(nomeParametros)
    }
    
})

function carregaCategorias(produtos){
    let listaCategorias = ''

    for (let currentItem = 0; currentItem < produtos.length; currentItem++) {
        listaCategorias += `<li><a  id="categoria-${produtos[currentItem].categoria}"  class="dropdown-item links-categorias" >${produtos[currentItem].categoria}</a></li>`
    }
    menuCategorias.innerHTML = listaCategorias
    return menuCategorias
}




