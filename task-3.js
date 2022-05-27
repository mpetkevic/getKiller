function getKiller(suspectInfo, deadPeople) {
    for (const killer in suspectInfo) {
        const people = Object.values(suspectInfo[killer]);
        
        // на будушее
        // здесь можешь поставить чек, если массив пустой
        // дальше код остановить для перфонманса
        // чтоб не грузить оперативку и проц
        // если обьект будет больше и массивы длинее

        // например if(people.length === 0) return
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
