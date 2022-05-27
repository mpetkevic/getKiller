function getKiller(suspectInfo, deadPeople) {
    for (const killer in suspectInfo) {
        const people = Object.values(suspectInfo[killer]);
        const containsAllDeadPeople = deadPeople.every(element => {
            return people.includes(element);
        });
        if (containsAllDeadPeople === true) {
            alert(`Убийца ${killer}`);
        }
    }
}

getKiller(
    {
    'James': ['Jacob', 'Bill', 'Lucas'],
    'Johnny': ['David', 'Kyle', 'Lucas'],
    'Peter': ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
); // Убийца James

getKiller(
    {
    'Brad': [],
    'Megan': ['Ben', 'Kevin'],
    'Finn': [],
    },
    ['Ben']
); // Убийца Megan