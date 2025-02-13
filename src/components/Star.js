import checkedStar from '../assets/checked-star.png';
import uncheckedStar from '../assets/unchecked-star.png';
import greenCheckedStar from '../assets/green-checked-star.png';
import greenUncheckedStar from '../assets/green-unchecked-star.png';

const Star = (props) => {
    const { parent, starred, green, styles, setStarCheck=()=>{} } = props;
    let [ starStyle, setStarStyle ] = [ starred, (s) => starStyle = s ];
    const img = document.createElement('img');
    
    const render = () => {
        if (starStyle) {
            img.src = green ? greenCheckedStar : checkedStar;
        } else {
            img.src = green ? greenUncheckedStar : uncheckedStar;
        }
    }
    
    const constructor = (() => {
        const button = document.createElement('button');
        button.append(img);
        parent.append(button);
        
        button.setAttribute('style', 'display: flex; align-items: center; object-fit: cover; border: 0; background-color: transparent; padding: 0; margin-left: 5px');
        button.addEventListener('click', () => {
            setStarStyle(!starStyle);
            setStarCheck(starStyle);
            render();
        });
        img.setAttribute('style', `width: 20px; ${styles}`);

        render();
    })();
}

export default Star;