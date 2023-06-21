// Fully working scripts.js file

import {
  books, authors, genres, BOOKS_PER_PAGE,
} from './data.js';

let page = 1;
let matches = books;

const starting = document.createDocumentFragment();

for (const {
  author, id, image, title,
} of matches.slice(0, BOOKS_PER_PAGE)) {
  const element = document.createElement('button');
  element.classList = 'preview';
  element.setAttribute('data-preview', id);

  element.innerHTML = `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

  starting.appendChild(element);
}

document.querySelector('[data-list-items]').appendChild(starting);

/* --Drop down menus for genres and authors--
 *Used for...of loops
 *maintain and reuse this code,
 *keep the createOptionElement() & populateSelectElement() functions as reusable abstractions.
 *call the populateSelectElement() function & passing the appropriate container element,
 *(data, and first option text) as arguments.
 */

// Function to create option elements
function createOptionElement(value, text) {
  const option = document.createElement('option');
  option.value = value;
  option.innerText = text;
  return option;
}

// Function to populate select elements
function populateSelectElement(container, data, firstOptionText) {
  const fragment = document.createDocumentFragment();

  // Add the first option
  const firstOption = createOptionElement('any', firstOptionText);
  fragment.appendChild(firstOption);

  // Add the rest of the options
  for (const [id, name] of Object.entries(data)) {
    const option = createOptionElement(id, name);
    fragment.appendChild(option);
  }

  container.appendChild(fragment);
}

// Populate genres select element
const genreContainer = document.querySelector('[data-search-genres]');
populateSelectElement(genreContainer, genres, 'All Genres');

// Populate authors select element
const authorContainer = document.querySelector('[data-search-authors]');
populateSelectElement(authorContainer, authors, 'All Authors');

//! COULD HAVE USED SOLID
//* *Could have used the Open/closed principle (OCP) Classes should be open for extension, but closed for modification.

/*
 * set theme and handle form submit are reusable function.
 * Just cal the fuctions for its use
 */
// Function to set theme colors
function setThemeColors(darkColor, lightColor) {
  document.documentElement.style.setProperty('--color-dark', darkColor);
  document.documentElement.style.setProperty('--color-light', lightColor);
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // User sets color
  const formData = new FormData(event.target);
  const { theme } = Object.fromEntries(formData);

  if (theme === 'night') {
    setThemeColors('255, 255, 255', '10, 10, 20');
  } else {
    setThemeColors('10, 10, 20', '255, 255, 255');
  }

  document.querySelector('[data-settings-overlay]').open = false;
}

// Check if prefers-color-scheme is dark
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector('[data-settings-theme]').value = 'night';
  setThemeColors('255, 255, 255', '10, 10, 20');
} else {
  document.querySelector('[data-settings-theme]').value = 'day';
  setThemeColors('10, 10, 20', '255, 255, 255');
}

// Add event listener to form submission
document.querySelector('[data-settings-form]').addEventListener('submit', handleFormSubmit);


document.querySelector('[data-list-button]').innerText = `Show more (${books.length - BOOKS_PER_PAGE})`;
document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) > 0;

document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
`;

// Function to toggle overlay visibility
function toggleOverlay(overlaySelector, isOpen) {
  document.querySelector(overlaySelector).open = isOpen;
}

// Function to handle search button click
function handleSearchButtonClick() {
  toggleOverlay('[data-search-overlay]', true);
  document.querySelector('[data-search-title]').focus();
}

// Function to handle settings button click
function handleSettingsButtonClick() {
  toggleOverlay('[data-settings-overlay]', true);
}

// Function to handle cancel button click
function handleCancelButtonClick(overlaySelector) {
  toggleOverlay(overlaySelector, false);
}

// Function to handle list close button click
function handleListCloseButtonClick() {
  toggleOverlay('[data-list-active]', false);
}

// Add event listeners

document.querySelector('[data-search-cancel]').addEventListener('click', () => {
  handleCancelButtonClick('[data-search-overlay]');
});

document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
  handleCancelButtonClick('[data-settings-overlay]');
});

document.querySelector('[data-header-search]').addEventListener('click', () => {
  handleSearchButtonClick();
});

document.querySelector('[data-header-settings]').addEventListener('click', () => {
  handleSettingsButtonClick();
});

document.querySelector('[data-list-close]').addEventListener('click', () => {
  handleListCloseButtonClick();
});


document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  for (const book of books) {
    let genreMatch = filters.genre === 'any';

    for (const singleGenre of book.genres) {
      if (genreMatch) break;
      if (singleGenre === filters.genre) { genreMatch = true; }
    }

    if (
      (filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase()))
            && (filters.author === 'any' || book.author === filters.author)
            && genreMatch
    ) {
      result.push(book);
    }
  }

  page = 1;
  matches = result;

  if (result.length < 1) {
    document.querySelector('[data-list-message]').classList.add('list__message_show');
  } else {
    document.querySelector('[data-list-message]').classList.remove('list__message_show');
  }

 
  document.querySelector('[data-list-items]').appendChild(newItems);
  document.querySelector('[data-list-button]').disabled = (matches.length - (page * BOOKS_PER_PAGE)) < 1;

  document.querySelector('[data-list-button]').innerHTML = `
        <span>Show more</span>
        <span class="list__remaining"> (${(matches.length - (page * BOOKS_PER_PAGE)) > 0 ? (matches.length - (page * BOOKS_PER_PAGE)) : 0})</span>
    `;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelector('[data-search-overlay]').open = false;
});

/*document.querySelector('[data-list-button]').addEventListener('click', () => {
    const fragment = document.createDocumentFragment();
  
    for (const {
      author, id, image, title,
    } of matches.slice(page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE)) {
      const element = document.createElement('button');
      element.classList = 'preview';
      element.setAttribute('data-preview', id);
  
      element.innerHTML = `
              <img
                  class="preview__image"
                  src="${image}"
              />
              
              <div class="preview__info">
                  <h3 class="preview__title">${title}</h3>
                  <div class="preview__author">${authors[author]}</div>
              </div>
          `;
  
      fragment.appendChild(element);
    }
  
    document.querySelector('[data-list-items]').appendChild(fragment);
    page += 1;
  });*/
  
document.querySelector('[data-list-items]').addEventListener('click', (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;

  for (const node of pathArray) {
    if (active) break;

    if (node?.dataset?.preview) {
      let result = null;

      for (const singleBook of books) {
        if (result) break;
        if (singleBook.id === node?.dataset?.preview) result = singleBook;
      }

      active = result;
    }
  }

  if (active) {
    document.querySelector('[data-list-active]').open = true;
    document.querySelector('[data-list-blur]').src = active.image;
    document.querySelector('[data-list-image]').src = active.image;
    document.querySelector('[data-list-title]').innerText = active.title;
    document.querySelector('[data-list-subtitle]').innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
    document.querySelector('[data-list-description]').innerText = active.description;
  }
});
