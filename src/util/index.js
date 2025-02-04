/**
 * esta funcion suma el precio de los productos que recibe como parametro
 * 
 * @param {Array} products  cartProducts : array de objetos
 * @returns {Number} sum : suma de los precios de los productos
 */

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach(product => sum += product.price);
    // console.log('sum', sum);
    
    return sum

}
