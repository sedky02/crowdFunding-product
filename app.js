//humberger staff
const humberger = document.querySelector('.nav-humberger');
const line = document.querySelectorAll('.nav-humberger .line');
const ul = document.querySelector('.nav .items');
const tags = document.querySelectorAll('.nav .items a');
let toggleMenu= false;
function Menu(){
        const timeMenu = gsap.timeline({ defaults: { ease: "power1.easeInOut" } });
        timeMenu.to(line[1], 0.05, {marginBottom:toggleMenu ? "5px": "0", x:toggleMenu ? "0":  " -100%"})
        .to(line[0], 0.1, {marginBottom:toggleMenu ? "5px":"0", rotation:toggleMenu ? "0":  "45", y:toggleMenu ? "0": "10px"},"-=0.05")
        .to(line[2], 0.1, {rotation: toggleMenu ? "0": " 135", y:toggleMenu ? "0": "2px"},"-=0.15")
        .to(ul, 0.3, {opacity: toggleMenu ? "0": " 1", pointerEvents:toggleMenu ? "none": "all"},"-=0.15")        
};
humberger.addEventListener('click',()=>{
    if(toggleMenu==false){
        Menu();
        toggleMenu=true;
    } else {
        Menu();
        toggleMenu=false;
    }
});

tags.forEach(tag=>{
        tag.addEventListener('click',()=>{
                toggleMenu=true;
                Menu();
                toggleMenu=false;
                const Time = gsap.timeline({ defaults: { ease: "power1.easeInOut" } });
                Time.to(ul, 0.3, {opacity: toggleMenu ? "0": " 1", pointerEvents:toggleMenu ? "none": "all"}); 
    })
});
//bookmark staff // declarations
const bookmark = document.getElementById('bookmark');
const bookmarkText = document.querySelector('#bookmark span');
const circleIcon = document.querySelector('.circle');
const bookmarkIcon = document.querySelector('.icon');
let toggle= false;
// bookmark program
const changeBookmark = ( circle, icon, text)=>{
    circle.style.fill = '#147b74';
    icon.style.fill = ' white';
    text.innerHTML='bookmarked';
};
const returnBookmark = ( circle, icon, text)=>{
    circle.style.fill = '#717171';
    icon.style.fill = '#B1B1B1';
    text.innerHTML='bookmark';
};
bookmark.addEventListener('click', ()=>{
    if (toggle==false){
        changeBookmark(circleIcon, bookmarkIcon, bookmarkText);
        toggle=true;
    } else {
        returnBookmark(circleIcon, bookmarkIcon, bookmarkText);
        toggle=false;
    }
});
//back this project staff // declaration 
const cardOpen= document.querySelector('.cardOpen');
const cardClose= document.querySelector('.closeBack');
const hideCard= document.querySelector('#hide');
const closeHidee = document.querySelectorAll('.closeHidee');
let toggleCard = false; 
function openCard(open,hide) {
    open.addEventListener('click' , ()=>{
        const tl = gsap.timeline({ defaults: { ease: "power1.easeInOut" } });
        tl.to(hide, 0.2, {opacity:"1", pointerEvents: "all"});
        toggleCard= true;
    })
};
function closeCard(close, hide) {
    close.addEventListener('click' , ()=>{
        const tl = gsap.timeline({ defaults: { ease: "power1.easeInOut" } });
        tl.to(hide, 0.2, {opacity:"0", pointerEvents: "none"});
        card.forEach(Element=>{
            Element.style.border=  "1px solid rgba(0,0,0,.125)";
        });
        checkedBox.forEach(Element=>{
            Element.style.fill=  "white";
        });
        checkedStroke.forEach(Element=>{
            Element.style.stroke=  "#717171";
        });
        div5.forEach(Element=>{
            Element.style.opacity=  "0";
            Element.style.display=  "none";
        });
        toggleCard= false;
    })
};
closeHidee.forEach((item)=>{
    item.addEventListener('click',()=>{
        const tl = gsap.timeline({ defaults: { ease: "power1.easeInOut" } });
        tl.to(hideCard, 0.2, {opacity:"0", pointerEvents: "none"})
        .to(hideSuccess, 0.2, { opacity:"1", pointerEvents: "all"}  );
    })
});
openCard(cardOpen, hideCard);
closeCard(cardClose, hideCard);
//cardBack staff // declaration 
const card = document.querySelectorAll('.back .card');
const div1 = document.querySelectorAll('.back .card .div1');
const checkedBox = document.querySelectorAll('.checked');
const checkedStroke = document.querySelectorAll('.checked-stroke');
const div5 = document.querySelectorAll('.div5');
let toggleSelect = false;
//card program
function cardSelect(item, index) {
    item.addEventListener('click', ()=>{
        card.forEach(Element=>{
            Element.style.border=  "1px solid rgba(0,0,0,.125)";
        });
        checkedBox.forEach(Element=>{
            Element.style.fill=  "white";
        });
        checkedStroke.forEach(Element=>{
            Element.style.stroke=  "#717171";
        });
        div5.forEach(Element=>{
            Element.style.opacity=  "0";
            Element.style.display=  "none";
        });
        function selectCard(){
            const tl = gsap.timeline({ defaults: { ease: "power1.easeInOut" } });
            tl.to(card[index], 0.15, {border:"1px solid #3cb4ac"})
            .to(checkedBox[index], 0.15, {fill:  "#3cb4ac"}, "-=0.15")
            .to(checkedStroke[index], 0.15, {stroke:  "#3cb4ac"}, "-=0.3")
            .to(div5[index-1],0.2, { opacity: "1", display : "flex"}, "-=0.45");
        }
        selectCard();
    }) };
div1.forEach(cardSelect);
//successCard staff //declaration
const closeSuccess= document.querySelector('.closeSuccess');
const openSuccess= document.querySelectorAll('.submitt');
const hideSuccess= document.querySelector('.hideSuccess');
//staff
function successOpen(item){
    item.addEventListener('click', ()=>{
        const time = gsap.timeline({ defaults: { ease: "power1.easeInOut" } });
        time.to(hideSuccess, 0.2, {opacity:"1", pointerEvents: "all"},"+=.55");
    })
};
openSuccess.forEach(successOpen);
function closeHideCard(close, hide) {
    close.addEventListener('click' , ()=>{
        const tl = gsap.timeline({ defaults: { ease: "power1.easeInOut" } });
        tl.to(hide, 0.2, {opacity:"0", pointerEvents: "none"});
        card.forEach(Element=>{
            Element.style.border=  "1px solid rgba(0,0,0,.125)";
        });
        checkedBox.forEach(Element=>{
            Element.style.fill=  "white";
        });
        checkedStroke.forEach(Element=>{
            Element.style.stroke=  "#717171";
        });
        div5.forEach(Element=>{
            Element.style.opacity=  "0";
            Element.style.display=  "none";
        })
    }) 
};
closeHideCard(closeSuccess,hideSuccess);
