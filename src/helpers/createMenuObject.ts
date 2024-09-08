type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';     // type contendo opções de strings do 'activeMenu'

export const createMenuObject = (activeMenu: MenuOptions) => {       // reçebendo 'activeMenu' que é uma string que conterá o menu ativo
    let returnObject = {        // objeto 'returnObject' com todos false
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu !== '') {     // se 'activeMenu' for diferente de vazio
        returnObject[activeMenu] = true;        // o item é seleçionado e transformado em true
    }

    return returnObject;
}