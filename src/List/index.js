import { getList } from "../services/storage";
import AddTask from "./AddTask";
import Header from "./Header";
import Task from "./Task";

const List = (props) => {
    const { parent, render } = props;
    const { title, starred } = getList();
    let [ searchText, setSearchText ] = [ '', (t) => searchText = t ];
    const container = document.createElement('div');
    const taskDiv = document.createElement('div');

    const setSearch = (t) => {
        setSearchText(t);
        renderTask()
    }

    const renderTask = () => {
        const { tasks } = getList();
        taskDiv.innerHTML = '';
        Task({ parent: taskDiv, tasks, searchText, renderTask });
    }

    const constructor = (() => {
        const header = Header({ parent: container, title, setSearch, starred, render });
        container.append(taskDiv);
        renderTask()
        AddTask({ parent: container, renderTask });
        parent.append(container);

        container.setAttribute('style', 'display: flex; flex-direction: column; gap: 50px; width: 100%; height: 100%; margin-left: 50px; color: var(--pakistan-green)');
        taskDiv.setAttribute('style', 'overflow: scroll');
    })();
}

export default List;