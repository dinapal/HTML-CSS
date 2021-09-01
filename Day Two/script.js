'use-strict';

const searchBtn = document.querySelector('.search-icon a');
const searchExit = document.querySelector('.search-exit');
const searchBox = document.querySelector('.search-bar');

searchExit.addEventListener('click', function(){
    searchBox.classList.remove('show-search');
    searchBox.classList.add('remove-search');
});
searchBtn.addEventListener('click', function(){
    searchBox.classList.remove('remove-search');
    searchBox.classList.add('show-search');
});
