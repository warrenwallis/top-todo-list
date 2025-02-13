import Check from './Check';
import Star from './Star';
import noteImg from '../assets/note.png';
import dateImg from '../assets/calendar.png';

const Tab = (props) => {
    const { parent, index, check, checked, updateCheck, title, star, starred, addDescription, description, date, note, styles, idx, setListIdx=()=>{}, render=()=>{}, modal=()=>{}, setStarCheck=()=>{} } = props;

    const InformationDiv = (props) => {
        const { parent } = props;

        const constructor = (() => {
            const titleSpan = document.createElement('span');
            const descriptionSpan = document.createElement('span');
            const extraDiv = document.createElement('div');
            parent.append(titleSpan, descriptionSpan, extraDiv);

            descriptionSpan.setAttribute('style', 'font-size: 16px; font-weight: regular');
            extraDiv.setAttribute('style', 'display: flex; font-size: 12px; font-weight: regular');

            titleSpan.textContent = title;
            if (addDescription) {
                descriptionSpan.style.height = '25px';
                descriptionSpan.style.marginTop = '5px';
                if (description !== '') {
                    descriptionSpan.textContent = description;
                } else {
                    descriptionSpan.style.opacity = '33%';
                    descriptionSpan.textContent = 'No Description';
                }
            }
            if (date) {
                const dateDiv = document.createElement('div');
                const imgDiv = document.createElement('div');
                const img = document.createElement('img');
                const description = document.createElement('span');
                imgDiv.append(img);
                dateDiv.append(imgDiv, description);
                extraDiv.append(dateDiv);

                dateDiv.setAttribute('style', 'display: flex; gap: 5px; margin-right: 10px');
                img.setAttribute('style', 'width: 12px');

                img.src = dateImg;
                description.textContent = date;
            }
            if (note) {
                const dateDiv = document.createElement('div');
                const imgDiv = document.createElement('div');
                const img = document.createElement('img');
                const description = document.createElement('span');
                imgDiv.append(img);
                dateDiv.append(imgDiv, description);
                extraDiv.append(dateDiv);

                dateDiv.setAttribute('style', 'display: flex; gap: 5px');
                img.setAttribute('style', 'width: 12px');

                img.src = noteImg;
                description.textContent = 'Note';
            }
        })();
    }

    const constructor = (() => {
        const container = document.createElement('div');
        if (check) {
            Check({ parent: container, index, checked, updateCheck })
        }
        const informationDiv = document.createElement('div');
        container.append(informationDiv);
        if (star) {
            Star({ parent: container, starred, setStarCheck });
        }
        parent.append(container);

        container.setAttribute('style', `display: flex; justify-content: space-between; color: var(--cornsilk); padding: 6px 10px; border-radius: 5px; font-weight: var(--medium); background: var(--pakistan-green); font-size: 12px; ${styles}`);
        informationDiv.setAttribute('style', 'display: flex; flex-direction: column; flex: 1; justify-content: center');
        informationDiv.addEventListener('click', () => {
            modal();
            setListIdx(idx);
            render();
        });

        InformationDiv({ parent : informationDiv });
    })();
}

export default Tab;