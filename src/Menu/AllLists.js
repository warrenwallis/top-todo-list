import information from '../assets/information.json';
import Tab from '../components/Tab';
import { getAllLists, getListIdx, setListIdx, setList } from '../services/storage';

const AllLists = (props) => {
    const { parent, render, searchText } = props;
    const showListIdx = getListIdx();
    const lists = getAllLists();
    const container = document.createElement('div');

    const constructor = (() => {
        parent.append(container);

        container.setAttribute('style', 'display: flex; flex-direction: column; gap: 10px');

        container.textContent = 'All Lists';
        for (const [ idx, { title, starred }] of lists.entries()) {
            if (searchText === '') {
                Tab({ parent: container, title: title, addDescription: false, star: true, starred, styles: `height: 60px; ${idx == showListIdx ? 'background: var(--dark-moss-green)' : ''}`, showListIdx, idx, setListIdx, render, setStarCheck: (star) => {
                    setList({ star });
                    render();
                } });
            } else if (title.toLowerCase().includes(searchText)) {
                Tab({ parent: container, title: title, addDescription: false, star: true, starred, styles: `height: 60px; ${idx == showListIdx ? 'background: var(--dark-moss-green)' : ''}`, showListIdx, idx, setListIdx, render, setStarCheck: (star) => {
                    setList({ star });
                    render();
                } });
            }
        }
    })()

    return container;
}

export default AllLists;