const menuCategorias = document.querySelector('.dropdown-menu')
const linkCategorias = document.querySelectorAll('.links-categorias')

function carregaCategorias(produtos){
    let listaCategorias = ''

    for (let currentItem = 0; currentItem < produtos.length; currentItem++) {
        listaCategorias += `<li><a id="categoria-${produtos[currentItem].categoria}" class="dropdown-item">${produtos[currentItem].categoria}</a></li>`
    }

    menuCategorias.innerHTML = listaCategorias
    return menuCategorias
}

window.addEventListener("DOMContentLoaded",function(){
    carregaCategorias(produtos)

})

linkCategorias.forEach(function(id){
    id.addEventListener("click",function(e){
        itemId = e.currentTarget.id
        if(itemId == 'categoria-Blusas'){
            window.location.href = "./produtos.html?categoria=Blusas";
        }else if(itemId == 'categoria-Calças'){
            window.location.href = "./produtos.html?categoria=Calças";
        }else if(itemId == 'categoria-Shorts'){
            window.location.href = "./produtos.html?categoria=Shorts";
        }else if(itemId == 'categoria-Saias'){
            window.location.href = "./produtos.html?categoria=Saias";
        }else if(itemId == 'categoria-Macacãos'){
            window.location.href = "./produtos.html?categoria=Macacãos";
        }else{
            window.location.href = "./produtos.html?categoria=Conjuntos";
        }
    })
    
})
