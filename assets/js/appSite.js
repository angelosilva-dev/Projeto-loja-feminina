const menuCategorias = document.querySelector('.dropdown-menu')

function carregaCategorias(produtos){
    let listaCategorias = ''

    for (let currentItem = 0; currentItem < produtos.length; currentItem++) {
        listaCategorias += `<li><a class="dropdown-item" href="#">${produtos[currentItem].categoria}</a></li>`
    }
    menuCategorias.innerHTML = listaCategorias
    return menuCategorias
}

window.addEventListener("DOMContentLoaded",function(){
    carregaCategorias(produtos)
    // mostrarTodosProdutos(produtos)


})