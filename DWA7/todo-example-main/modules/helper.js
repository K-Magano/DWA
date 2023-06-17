 
/**
 * @param {string} dataAttr 
 * @param {string} [value] 
 * @param {HTMLElement}
 */

 export const getHtml = (dataAttr, value) => {
    const selector = value 
    ?`[data-${dataAttr}="${value}"]` 
    :`[data-${dataAttr}]`;

    const element = document.querySelector(selector);
    const isHtmlElement = element instanceof HTMLElement;

    if (!isHtmlElement) {
        throw new Error(`${selector} attribute not found in HTML`);
    }

    return element;
};


//!S in solid (this creates the html task)
/**
* @param {string} dataAttr
* @param {string} [value] 
* @param {boolean} 
 */

 export const doesHtmlExist = (dataAttr, value) => { 
    const selector = value 
     ?`[data-${dataAttr}="${value}"]` 
     :`[data-${dataAttr}]`;

    const element = document.querySelector(selector);
    const isHtmlElement = element instanceof HTMLElement;
    return isHtmlElement;
};