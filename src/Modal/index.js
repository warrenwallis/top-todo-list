import Star from "../components/Star";
import calendar from '../assets/calendar.png';
import noteSrc from '../assets/note.png';
import { deleteTask, setTask } from "../services/storage";

const Modal = (props) => {
    const { parent, title, starred, completed, description, date, note, index, renderTask } = props;
    let [ titleText, setTitleText ] = [ title, (t) => titleText = t ];
    let [ starCheck, setStarCheck ] = [ starred, (s) => starCheck = s ];
    let [ descriptionText, setDescriptionText ] = [ description, (d) => descriptionText = d ];
    let [ dateText, setDateText ] = [ date, (d) => dateText = d ];
    let [ noteText, setNoteText ] = [ note, (n) => noteText = n ];

    const constructor = (() => {
        const shadow = document.createElement('div');
        const container = document.createElement('div'); // change to form when styled
        const header = document.createElement('div');
        const title = document.createElement('input')
        const description = document.createElement('textarea');
        const dateDiv = document.createElement('div');
        const dateImg = document.createElement('img');
        const date = document.createElement('input');
        const noteDiv = document.createElement('div');
        const noteHeader = document.createElement('div');
        const noteImg = document.createElement('img');
        const noteTitle = document.createElement('span');
        const note = document.createElement('textarea');
        const buttonsSpacer = document.createElement('div');
        const buttonsDiv = document.createElement('div');
        const exitButton = document.createElement('button');
        const deleteButton = document.createElement('button');
        header.append(title);
        const star = Star({ parent: header, starred, styles: 'width: 30px', setStarCheck });
        dateDiv.append(dateImg, date);
        noteHeader.append(noteImg, noteTitle);
        noteDiv.append(noteHeader, note);
        buttonsDiv.append(exitButton, deleteButton);
        buttonsSpacer.append(buttonsDiv);
        container.append(header, description, dateDiv, noteDiv, buttonsSpacer);
        parent.append(shadow, container);

        shadow.setAttribute('style', 'width: 70%; height: 100%; background-color: var(--tigers-eye); opacity: 70%');
        container.setAttribute('style', 'display: flex; flex-direction: column; width: 30%; background-color: var(--tigers-eye); padding: 50px 20px; gap: 25px')
        header.setAttribute('style', 'display: flex; justify-content: space-between');
        title.setAttribute('style', 'border: 2px solid var(--cornsilk); padding: 5px 5px; background: var(--tigers-eye); font-weight: var(--semibold); font-size: 32px; color: var(--cornsilk)');
        title.addEventListener('input', (e) => {
            setTitleText(e.target.value);
        });
        description.setAttribute('style', 'border: 2px solid var(--cornsilk); padding: 5px 5px; background: var(--tigers-eye); font-size: 16px; color: var(--cornsilk); height: 10%');
        description.addEventListener('input', (e) => {
            setDescriptionText(e.target.value);
        })
        dateDiv.setAttribute('style', 'display: flex; align-items: center; gap: 10px');
        dateImg.setAttribute('style', 'width: 25px');
        date.setAttribute('style', 'border: 2px solid var(--cornsilk); padding: 5px 5px; background: var(--tigers-eye); font-size: 16px; color: var(--cornsilk); font-size: 20px');
        date.addEventListener('input', (e) => {
            setDateText(e.target.value);
        })
        noteDiv.setAttribute('style', 'display: flex; flex-direction: column; gap: 10px; height: 60%');
        noteHeader.setAttribute('style', 'display: flex; align-items: center; color: var(--cornsilk); font-size: 20px; gap: 10px');
        noteImg.setAttribute('style', 'width: 25px');
        note.setAttribute('style', 'border: 2px solid var(--cornsilk); padding: 5px 5px; background: var(--tigers-eye); font-size: 16px; color: var(--cornsilk); height: 100%');
        note.addEventListener('input', (e) => {
            setNoteText(e.target.value);
        })
        buttonsSpacer.setAttribute('style', 'display: flex; align-items: end; width: 100%; height: 75%');
        buttonsDiv.setAttribute('style', 'display: flex; gap: 25px; width: 100%');
        exitButton.setAttribute('style', 'width: 50%; height: 30px; border-radius: 5px; background: var(--earth-yellow); border: 0;  color: var(--cornsilk); font-size: 16px');
        exitButton.addEventListener('click', () => {
            setTask({ index, title: titleText, starred: starCheck, completed, description: descriptionText, date: dateText, note: noteText });
            const modal = document.getElementById('modal');
            modal.innerHTML = '';
            modal.style.display= 'none';
            renderTask();
        })
        deleteButton.setAttribute('style', 'width: 50%; height: 30px; border-radius: 5px; background: var(--earth-yellow); border: 0;  color: var(--cornsilk); font-size: 16px');
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
            const modal = document.getElementById('modal');
            modal.innerHTML = '';
            modal.style.display= 'none';
            renderTask();
        });

        title.placeholder = 'Title';
        title.value = titleText;
        description.placeholder = 'Description';
        description.value = descriptionText;
        dateImg.src = calendar;
        date.placeholder = 'date';
        date.value = dateText;
        noteImg.src = noteSrc;
        noteTitle.textContent = 'Note';
        note.placeholder = 'Notes'
        note.value = noteText;
        exitButton.textContent = 'Exit';
        deleteButton.textContent = 'Delete';
    })();
}

export default Modal;