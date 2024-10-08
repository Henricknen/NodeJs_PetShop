"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMenuObject = void 0;
const createMenuObject = (activeMenu) => {
    let returnObject = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };
    if (activeMenu !== '') { // se 'activeMenu' for diferente de vazio
        returnObject[activeMenu] = true; // o item é seleçionado e transformado em true
    }
    return returnObject;
};
exports.createMenuObject = createMenuObject;
