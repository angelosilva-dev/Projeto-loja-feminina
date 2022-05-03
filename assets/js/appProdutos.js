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
    contadorProdutos.textContent = `${count} produto(s) encontrado(s)`

    return secaoProdutos   
}

function filtrarProdutos(filtro){
    let filtroSelecionado = filtro
    let valorFiltro = ''
    console.log(filtroSelecionado)
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
    carregaCategorias(categorias)
    createBtnEventListener()
    if(nomeParametros == null){
        mostrarTodosProdutos(produtos)
    }else{
        filtrarProdutos(nomeParametros)
    }
    
})

function carregaCategorias(categorias){
    let listaCategorias = ''

    for (let currentItem = 0; currentItem < categorias.length; currentItem++) {
        listaCategorias += `<li><a id="categoria-${categorias[currentItem]}" class="dropdown-item" >${categorias[currentItem]}</a></li>`
    }

    menuCategorias.innerHTML = listaCategorias
    return menuCategorias
}

function createBtnEventListener()
{
    let link = document.querySelectorAll('.dropdown-item');
    for(let item of link){
        item.addEventListener('click', function(e){
            itemCategoria = e.currentTarget.id
            if(itemCategoria == 'categoria-Blusas'){
                filtrarProdutos('Blusas')
            }else if(itemCategoria == 'categoria-Calças'){
                filtrarProdutos('Calças')
            }else if(itemCategoria == 'categoria-Shorts'){
                filtrarProdutos('Shorts')
            }else if(itemCategoria == 'categoria-Saias'){
                filtrarProdutos('Saias')
            }else if(itemCategoria == 'categoria-Macacãos'){
                filtrarProdutos('Macacãos')
            }else if(itemCategoria == 'categoria-Conjuntos'){
                filtrarProdutos('Conjuntos')
            }else if(itemCategoria == 'categoria-Agasalhos'){
                filtrarProdutos('Agasalhos')
            }
        });
    }
}
