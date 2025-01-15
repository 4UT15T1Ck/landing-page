const Active = () => {
    const nav_li = document.querySelectorAll(
        ".navbar .container .nav-bar-collapse a"
    );
    for (let i = 1; i < nav_li.length - 1; i++) {
        const ID1 = nav_li[i].getAttribute("href").substring(1);
        const ID2 = nav_li[i + 1].getAttribute("href").substring(1);
        const el1 = document.getElementById(ID1);
        const el2 = document.getElementById(ID2);
        const posi1 =
            el1.getBoundingClientRect().top -
            el1.ownerDocument.documentElement.clientTop;
        const posi2 =
            el2.getBoundingClientRect().top -
            el2.ownerDocument.documentElement.clientTop;
        if (posi1 <= 55 && posi2 > 55) nav_li[i].classList.add("active");
        else {
            nav_li[i].classList.remove("active");
            nav_li[i + 1].classList.remove("active");
            if (posi1 > 55 && i == 1) {
                nav_li[0].classList.add("active");
                break;
            } else nav_li[0].classList.remove("active");
        }
    }
};
window.addEventListener("scroll", () => Active());

const collapse_panel_switch = () => {
    const element = document.querySelector(".navbar");
    element.classList.toggle("extend");
    element.getAttribute;
};
const panel_collapse = () => {
    const element = document.querySelector(".navbar");
    element.classList.remove("extend");
};

function About_IMG(index) {
    const img = document.getElementById("right-here");
    img.setAttribute("src", `./img/about${index}.jpg`);
}

function dis_emp_mess(index) {
    const mess = document.getElementsByClassName("employee-message");
    for (let i = 0; i < mess.length; i++) {
        if (i == index && !mess[i].classList.contains("display"))
            mess[i].classList.add("display");
        else mess[i].classList.remove("display");
    }
}

const play_video = () => {
    const screen = document.getElementById("display-screen");
    screen.classList.remove("stop-display");
};

const exit = () => {
    const screen = document.getElementById("display-screen");
    screen.classList.add("stop-display");
    stopVideos();
};

const stopVideos = () => {
    document.querySelectorAll("iframe").forEach((v) => {
        v.src = v.src;
    });
    document.querySelectorAll("video").forEach((v) => {
        v.pause();
    });
};

const all_form = document.getElementsByTagName("form");
function submit_noti(form_index) {
    let chosen = null;
    if (form_index == 1) chosen = all_form[0];
    else chosen = all_form[1];
    const el = chosen.children;
    for (const child of el) {
        if (
            child.tagName == "INPUT" ||
            child.tagName == "SELECT" ||
            child.tagName == "BUTTON" ||
            child.tagName == "DIV"
        )
            child.classList.add("stop-display");
        if (child.classList.contains("input-success-noti"))
            child.classList.remove("stop-display");
    }
    return false;
}
all_form[0].addEventListener("submit", function (event) {
    event.preventDefault();
});
all_form[1].addEventListener("submit", function (event) {
    event.preventDefault();
});

// img slider
let counter = 0;
const slider = document.getElementById("slider");
const content = slider.children[0];
const img_list = content.children;
function showSlider(index) {
    counter = index;
    slider.classList.remove("stop-display");
    for (let i = 0; i < img_list.length - 2; i++) {
        if (index == i) img_list[i].classList.remove("stop-display");
        else img_list[i].classList.add("stop-display");
    }
    img_list[img_list.length - 1].innerText = `${counter + 1} of 5`;
}

const next_img = () => {
    if (counter < 4) counter++;
    else counter = 0;
    showSlider(counter);
};

const previous_img = () => {
    if (counter > 0) counter--;
    else counter = 4;
    showSlider(counter);
};

const quitSlider = () => {
    slider.classList.add("stop-display");
};

const bounce = document.querySelectorAll("#Ani1");
const slide = document.querySelectorAll("#Ani3");
const fade = document.querySelectorAll("#Ani2");
let bounce_array = Array.from(bounce);
let slide_array = Array.from(slide);
let fade_array = Array.from(fade);

function Is_in_view(ani) {
    const top = ani.getBoundingClientRect().top;
    const bottom = ani.getBoundingClientRect().bottom;
    const view = window.screen.height;
    return (
        (top > view * 0.2 && view * 0.8 > top) ||
        (bottom > view * 0.2 && view * 0.8 > bottom)
    );
}

function Activate_animation() {
    for (child of bounce_array)
        if (Is_in_view(child)) {
            child.id = "Bounce-In";
            const index = bounce_array.indexOf(child);
            bounce_array.splice(index, 1);
        }
    for (child of slide_array)
        if ((Is_in_view(child)))
        {
            child.id = "slide-in";
            const index = slide_array.indexOf(child);
            slide_array.splice(index, 1);
        }
    for (child of fade_array)
        if ((Is_in_view(child)))
        {
            child.id = "fade-in";
            const index = fade_array.indexOf(child);
            fade_array.splice(index, 1);
        }
    if (!bounce_array.length && !slide_array.length && !fade_array.length)
        window.removeEventListener("scroll", Activate_animation)
    window.removeEventListener("load", Activate_animation)
}
window.addEventListener("scroll", Activate_animation);
window.addEventListener("load", Activate_animation);