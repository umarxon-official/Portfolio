window.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
  let modalBtn = document.querySelector(".modal_btn"),
    btn = document.querySelector(".btn"),
    modal = document.querySelector(".modal"),
    aboutBtn = document.querySelector("#about_btn"),
    menu = document.querySelector(".menu_icon"),
    nav = document.querySelector(".navbar");

  modalBtn.addEventListener("click", () => {
    modal.classList.add("hide");
  });
  btn.addEventListener("click", () => {
    modal.classList.remove("hide");
  });
  menu.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
  let alink = document.querySelectorAll(".header_link");
  for (let i = 0; i < alink.length; i++) {
    alink[i].addEventListener("click", () => {
      alink.forEach((item) => {
        item.classList.remove("active");
        alink[i].classList.add("active");
      });
    });
  }

  window.addEventListener("scroll", () => {
    let reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add("active");
      }
    }
  });
});

//   const forma = document.querySelector('.form');
//   const messageList = document.querySelector('.messageList');


// import dot from 'dotenv'

// const tadich = process.env.TADICH
// const kennot = process.env.KENNOT

const ppShow = document.querySelector('.ppShow')
const pp = document.querySelector('.pp')
ppShow.addEventListener('click', ()=>{
  pp.classList.remove('hides')
})
const closes = document.querySelector('.close')
closes.addEventListener('click', ()=>{
  pp.classList.add('hides')
})

document.getElementById("contact").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;

  const data = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value,
  };

  try {
    const response = await fetch("portfolio-backends-ten.vercel.app", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    alert('Your message has been sent successfully!');
    form.reset();
  } catch (error) {
    console.error(error);
    alert("There was an error sending the message.");
  }
});

