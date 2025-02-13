import information from '../assets/information.json';
import Tab from '../components/Tab';

const QuickLinks = (props) => {
    const { parent } = props;
    const { quickLinks } = information;

    const constructor = (() => {
        const container = document.createElement('div');
        parent.append(container);

        container.setAttribute('style', 'display: flex; flex-direction: column; gap: 10px; width: 100%');

        container.textContent = 'Quick Links';
        for (let link of quickLinks) {
            Tab({ parent : container, title : link, addDescription: false, styles: 'height: 30px' });
        }
    })();
} 

export default QuickLinks;