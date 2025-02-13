const SearchBar = (props) => {
    const { parent, styles, setSearch=()=>{} } = props;
    let { text, setText } = { text: 'Search', setText: (t) => text = t };

    const constructor = (() => {
        const searchBar = document.createElement('input');
        parent.append(searchBar);

        searchBar.setAttribute('style', `display: flex; background: var(--tigers-eye); width: 100%; box-sizing: border-box; border: 0; padding: 0; height: 30px; border-radius: 5px; color: var(--cornsilk); padding: 6px 10px; ${styles}`);
        searchBar.addEventListener('input', (e) => {
            setText(e.target.value);
            setSearch(text);
        });

        searchBar.placeholder = text;
    })();
}

export default SearchBar;