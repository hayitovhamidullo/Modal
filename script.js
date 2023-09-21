const shovBet = document.getElementById(`show-btn`);
const clovzez = document.getElementById(`Modal`);
const clovzez_right = document.getElementById(`close-btn`);
const nam = document.getElementById(`bugun`);

shovBet.addEventListener(`click`, () => {
    clovzez.classList.remove(`hiddin`);
});
clovzez_right.addEventListener(`click`, () => {
    clovzez.classList.add(`hiddin`);
});
nam.addEventListener(`click`, () => {
    clovzez.classList.add(`hiddin`);
});
clovzez.addEventListener(`click`, () => {
    clovzez.classList.add(`hiddin`);
});

document.addEventListener(`keydown`, (e)=>{
    if(e.key=="Escape"){
        clovzez.classList.add(`hiddin`);
    }
})