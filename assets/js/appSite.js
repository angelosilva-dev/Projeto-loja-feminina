const menuCategorias = document.querySelector('.dropdown-menu')
const linkCategorias = document.querySelectorAll('.links-categorias')


function carregaCategorias(categorias){
    let listaCategorias = ''

    for (let currentItem = 0; currentItem < categorias.length; currentItem++) {
        listaCategorias += `<li><a  id="categoria-${categorias[currentItem]}" class="dropdown-item">${categorias[currentItem]}</a></li>`
    }

    menuCategorias.innerHTML = listaCategorias
    return menuCategorias
}

window.addEventListener("DOMContentLoaded",function(){
    carregaCategorias(categorias)
    createBtnEventListener()
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
        }else if(itemId == 'categoria-Conjuntos'){
            window.location.href = "./produtos.html?categoria=Conjuntos";
        }else if(itemId == 'categoria-Agasalhos'){
            window.location.href = "./produtos.html?categoria=Agasalhos";
        }
    })
    
})


function createBtnEventListener()
{
    let link = document.querySelectorAll('.dropdown-item');
    for(let item of link){
        item.addEventListener('click', function(e){
            itemCategoria = e.currentTarget.id
            if(itemCategoria == 'categoria-Blusas'){
                window.location.href = "./produtos.html?categoria=Blusas";
            }else if(itemCategoria == 'categoria-Calças'){
                window.location.href = "./produtos.html?categoria=Calças";
            }else if(itemCategoria == 'categoria-Shorts'){
                window.location.href = "./produtos.html?categoria=Shorts";
            }else if(itemCategoria == 'categoria-Saias'){
                window.location.href = "./produtos.html?categoria=Saias";
            }else if(itemCategoria == 'categoria-Macacãos'){
                window.location.href = "./produtos.html?categoria=Macacãos";
            }else if(itemCategoria == 'categoria-Agasalhos'){
                window.location.href = "./produtos.html?categoria=Agasalhos";
            }else if(itemCategoria == 'categoria-Conjuntos'){
                window.location.href = "./produtos.html?categoria=Conjuntos";
            }
        });
    }
}

