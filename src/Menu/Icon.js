const Icon = (props) => {
    const { parent, src, link, images } = props;
    
    const constructor = (() => {
        const button = document.createElement('button');
        const img = document.createElement('img');
        button.append(img);
        parent.append(button);

        button.setAttribute('style', 'border: 0; background: var(--cornsilk); padding: 0; object-fit: cover');
        button.addEventListener('click', () => window.location.href = link);
        img.setAttribute('style', 'width: 25px;')
        
        img.src = images[src];
    })();
}

export default Icon;