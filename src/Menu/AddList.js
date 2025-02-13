import plus from '../assets/cornsilk-plus.png';
import { addList } from '../services/storage';

const AddList = (props) => {
    const { parent, renderLists } = props;
        let [ text, setText ] = [ '', (t) => text = t ];
    
        const constructor = (() => {
            const container = document.createElement('form');
            const img = document.createElement('img');
            const input = document.createElement('input');
            container.append(img, input);
            parent.append(container);
    
            container.setAttribute('style', 'display: flex; align-items: center; width: 100%; background: var(--pakistan-green); border-radius: 5px');
            container.addEventListener('submit', (e) => {
                e.preventDefault();
                addList({ title: text });
                renderLists();
                setText('');
                input.value = text;
            })
            img.setAttribute('style', 'width: 20px; height: 20px; margin: 0px 5px');
            input.setAttribute('style', 'width: 100%; margin: 10px 0px; margin-right: 5px; background: var(--pakistan-green); color: var(--cornsilk); border: 0; font-size: 12px');
            input.addEventListener('input', (e) => {
                setText(e.target.value);
                input.value = text;
            });
    
            img.src = plus;
            input.placeholder = 'Add List'
        })();
}

export default AddList;