import information from '../assets/information.json';
import Icon from './Icon';

const Footer = (props) => {
    const { parent } = props;
    const { footer } = information;
    const requireContext = require.context('../assets', false, /\.png$/);
    const images = {};

    requireContext.keys().forEach(element => {
        images[element] = requireContext(element);
    });

    const constructor = (() => {
        const container = document.createElement('div');
        const info = document.createElement('span');
        const iconsDiv = document.createElement('div');
        container.append(info, iconsDiv);
        parent.append(container);

        container.setAttribute('style', 'display: flex; flex-direction: column; justify-content: end; align-items: center; flex: 1; gap: 10px; width: 100%');
        info.setAttribute('style', 'text-align: center; font-weight: var(--medium); font-size: 12px');
        iconsDiv.setAttribute('style', 'display: flex; align-items: center; justify-content: space-between; width: 100%');

        info.textContent = 'Design and Created by Warren Pagsuguiron';
        for (let [ title, { src, link } ] of Object.entries(footer)) {
            Icon({ parent: iconsDiv, src, link, images });
        }
    })();
}

export default Footer;