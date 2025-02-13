import plus from '../assets/cornsilk-plus.png';
import { addTask } from '../services/storage';

const AddTask = (props) => {
    const { parent, renderTask } = props;
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
            addTask({ title: text });
            renderTask();
            setText('');
            input.value = text;
        })
        img.setAttribute('style', 'width: 24px; height: 24px; margin: 0px 7px');
        input.setAttribute('style', 'flex: 1; margin: 10px 10px; background: var(--pakistan-green); color: var(--cornsilk); border: 0; font-size: 16px');
        input.addEventListener('input', (e) => {
            setText(e.target.value);
            input.value = text;
        });

        img.src = plus;
        input.placeholder = 'Add Task'
    })();
}

export default AddTask;