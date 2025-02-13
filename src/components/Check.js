import checkedEllipse from '../assets/checked-ellipse.png';
import uncheckedEllipse from '../assets/unchecked-ellipse.png';

const Check = (props) => {
    const { parent, index, checked, updateCheck } = props;
    let [ check, setCheck ] = [ checked, (c) => check = c ];
    const img = document.createElement('img');
    
    const render = () => {
        if (check) {
            img.src = checkedEllipse;
        } else {
            img.src = uncheckedEllipse;
        }
    }
    
    const constructor = (() => {
        const button = document.createElement('button');
        button.append(img);
        parent.append(button);
        
        button.setAttribute('style', 'display: flex; align-items: center; object-fit: cover; border: 0; background-color: transparent; padding: 0; margin-right: 10px');
        button.addEventListener('click', () => {
            setCheck(!check);
            updateCheck(index, check);
            render();
        });
        img.setAttribute('style', 'width: 20px');

        render();
    })();
}

export default Check;