import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/ressponsive.css';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#nav_drawer');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});


import('../DATA.json').then(({ default: jsonData }) => {
    let datas = jsonData['restaurants']
    let dataList = '';
    datas.forEach(function (data) {
        dataList += `
        <div class="list-item">
            <img class="list-item-thumb" src="${data['pictureId']}" alt="${data['name']}" title="${data['name']}">
            <div class="city">${data['city']}</div>
            <div class="list-item-content">
                <p class="list-item-rating">
                    Rating :
                    <span class="list-item-rating-value">${data['rating']}</span>
                </p>
                <h1 class="list-item-title"><a href="#">${data['name']}</a></h1>
                <div class="list-item-desc">${data['description'].slice(0, 150)}...</div>
            </div>
        </div>
        `;
    });
    document.querySelector('.latest .list').innerHTML = dataList;
});