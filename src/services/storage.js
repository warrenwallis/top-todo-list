import information from '../assets/information.json';

const ALL_LISTS = 'allLists';
const LIST_IDX = 'listIdx';

export const checkStorage = (lists) => {
    try {
        console.log('Trying to use localstorage');
        const storage = window.localStorage;
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        console.log('Can use localstorage');
        
        if (storage.getItem(ALL_LISTS) !== null) {
            console.log('Lists already in localStorage');
        } else {
            setLists(lists);
            setListIdx(0);
        }

        return true;
    } catch (e) {
        console.log('Cannot use localstorage', 'Using test data instead');
        return false;
    }
}

export const setLists = (lists) => {
    const storage = window.localStorage;
    
    storage.setItem(ALL_LISTS, JSON.stringify(lists));
}

export const getAllLists = () => {
    const storage = window.localStorage;

    return JSON.parse(storage.getItem(ALL_LISTS));
}

export const addList = ({ title, starred=false, tasks=Array() }) => {
    const lists = getAllLists();

    lists.push({
        title,
        starred,
        tasks
    });
    setLists(lists);
    console.log(getAllLists());
}

export const getList = () => {
    const lists = getAllLists();
    const idx = getListIdx();

    return lists[idx];
}

export const setList = ({ star }) => {
    const lists = getAllLists();
    const idx = getListIdx();

    lists[idx].starred = star;

    setLists(lists);
}

export const getListIdx = () => {
    const storage = window.localStorage;

    return Number(storage.getItem(LIST_IDX));
}

export const setListIdx = (idx) => {
    const storage = window.localStorage;

    storage.setItem(LIST_IDX, idx);
}

export const addTask = ({ title, description='', date='', note='', checked=false, starred=false }) => {
    const list = getList();

    list.tasks.push(
        {
            title,
            starred,
            "completed": checked,
            description,
            date,
            note
        }
    )

    const lists = getAllLists();
    const idx = getListIdx();

    lists[idx] = list;
    setLists(lists);
}

export const setTask = ({ index, title, starred, completed, description, date, note }) => {
    const lists = getAllLists();
    const idx = getListIdx();

    lists[idx].tasks[index] = {
        title,
        starred,
        completed,
        description,
        date,
        note
    }

    setLists(lists);
}

export const deleteTask = (index) => {
    const lists = getAllLists();
    const idx = getListIdx();

    lists[idx].tasks.splice(index, 1);

    setLists(lists);
}

export const getTasks = () => {
    const { tasks } = getList();

    return tasks;
}