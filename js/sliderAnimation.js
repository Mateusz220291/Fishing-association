let activeElement = 0;
const timeChange = 6000;

const userImg = document.querySelector('.photo__user');
const h3Html = document.querySelector('.slider__username');
const pHtml = document.querySelector('.slider__useropinion');


const colorImages = ['users/Jan Kowalski.jpg', 'users/Adam Wójcik.jpg', 'users/Jacek Wiśniewski.jpg', 'users/Robert Nowak.jpg'];
const names = ['Jan Kowalski', 'Adam Wójcik', 'Jacek Wiśniewski', 'Robert Nowak'];
const opinions = ['Koło 999 to najlepsze koło wędkarskie na świecie! Bardzo dobrze dbają o swoje łowiska, gdzie można złapać wspaniałe ryby.', 'Wspaniała społeczność, w której można odpocząć od codziennego wyścigu szczurów. Wracam na ich łowiska kiedy tylko mogę.', 'Świetnie zorganizowane koło. Na swoich wodach posiadają wiele miejscówek, gdzie w pełni można się odizolować od świata.', 'Uwielbiam zapuszczać się na wielkie drapieżniki na ich wodach! Szczupak to jest król wód!'];

function changeElement() {
    activeElement++;
    if (activeElement == colorImages.length) {
        activeElement = 0;
    }
    userImg.src = colorImages[activeElement];
    h3Html.textContent = names[activeElement];
    pHtml.textContent = opinions[activeElement];

}

setInterval(changeElement, timeChange)