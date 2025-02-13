import AllLists from "./AllLists";
import Footer from "./Footer";
import QuickLinks from "./QuickLinks";
import SearchBar from "../components/SearchBar";
import AddList from "./AddList";

const Menu = (props) => {
    const { parent, setShowListIdx, render } = props;
    let [ searchText, setSearchText ] = [ '', (t) => searchText = t ];
    const allListsDiv = document.createElement('div');
    let allLists;

    const setSearch = (t) => {
        setSearchText(t);
        allLists.remove();
        allLists = AllLists({ parent: allListsDiv, setShowListIdx, render, searchText });
    }

    const constructor = (() => {
        const menu = document.createElement('div');
        const appTitle = document.createElement('div');
        menu.append(appTitle);
        const searchBar = SearchBar({ parent: menu, setSearch });
        const lists = document.createElement('div');
        // const quickLinks = QuickLinks({ parent: lists });
        allLists = AllLists({ parent: allListsDiv, setShowListIdx, render, searchText });
        lists.append(allListsDiv);
        menu.append(lists);
        const addList = AddList({ parent: menu, renderLists: render });
        const footer = Footer({ parent: menu });
        parent.append(menu);

        menu.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; height: 100%; width: 15%; padding: 0px 29px; gap: 35px; color: var(--pakistan-green); font-weight: var(--medium); font-size: 18px');
        allListsDiv.setAttribute('style', 'width: 100%');
        lists.setAttribute('style', 'display: flex; flex-direction: column; align-items: center; width: 100%; gap: 35px; overflow: scroll');
        appTitle.setAttribute('style', 'font-size: 36px; font-weight: bold');
        appTitle.textContent = 'Todo List';
    })();
}

export default Menu;