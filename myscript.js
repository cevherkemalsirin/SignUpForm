

const rightPanel = document.querySelector(".rightContainer");
const leftPanelImg = document.querySelector(".tonome_image");

//page contains left panel(Toname Image) and right panel(forum)
function SetRightPanelWidth()
{
    const rightPanelWidth = window.innerWidth - leftPanelImg.offsetWidth;
    rightPanel.style.width = rightPanelWidth + "px";
    console.log(window.innerWidth);
}

//inital 
window.addEventListener("load", SetRightPanelWidth);

window.addEventListener("resize", SetRightPanelWidth);
