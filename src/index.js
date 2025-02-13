import List from './List';
import Menu from './Menu';
import './styles.css'
import information from './assets/information.json'
import * as storageService from './services/storage';
import Modal from './Modal';

console.log('working');

const App = (() => {
    const { defaultLists } = information;
    let [ showListIdx, setShowListIdx ] = [ 0, (listIdx) => showListIdx = listIdx ];
    let [ showModal, setShowModal ] = [ false, (m) => showModal = m ];
    const content = document.getElementById('content');
    const modalDiv = document.getElementById('modal');
    storageService.checkStorage(defaultLists);
    
    const render = () => {
        content.innerHTML = '';
        // const modal = Modal({ parent: modalDiv });
        const menu = Menu({ parent: content, setShowListIdx, render });
        const list = List({ parent: content, render });
    }

    const constructor = (() => {

        render();
    })();
})();