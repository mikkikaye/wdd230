const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter); 
    });

button.addEventListener('click', () => {
    console.log("entering click");

    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        console.log(JSON.stringify(chaptersArray));
        setChapterList();
        
    }
    else {
        input.focus();
    }
    input.focus();
    input.value = '';
});

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item;
    deleteButton.textContent = "❌";
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    });
}

function setChapterList() {
    console.log(JSON.stringify(chaptersArray));
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}




