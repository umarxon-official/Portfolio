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

const ppShow = document.querySelector('.ppShow')
const pp = document.querySelector('.pp')
ppShow.addEventListener('click', ()=>{
  pp.classList.remove('hides')
})
const closes = document.querySelector('.close')
closes.addEventListener('click', ()=>{
  pp.classList.add('hides')
})

    const form = document.querySelector('.form');
    const messagesList = document.querySelector('.mmaodal');
    const customAlert = document.getElementById('customAlert');

    function loadMessages() {
      messagesList.innerHTML = '';
      const messages = JSON.parse(localStorage.getItem('messages')) || [];
      messages.forEach((msg, index) => {
        const div = document.createElement('div');
        div.className = 'message-item';
        div.style.border = '1px solid #ccc';
        div.style.padding = '10px';
        div.style.marginBottom = '8px';
        div.style.position = 'relative';

        div.innerHTML = `
          <strong>Ism:</strong> ${msg.name} <br>
          <strong>Email:</strong> ${msg.email} <br>
          <strong>Telefon:</strong> ${msg.phone} <br>
          <strong>Xabar:</strong> ${msg.message}
          <button class="delete-btn" data-index="${index}" style="
            position: absolute; right: 10px; top: 10px;
            background-color: #ff4d4d; border: none; color: white;
            padding: 5px 8px; cursor: pointer; border-radius: 4px;
          ">Delete</button>
        `;
        messagesList.appendChild(div);
      });
    }

    messagesList.addEventListener('click', (e) => {
      if (e.target.classList.contains('delete-btn')) {
        const index = e.target.getAttribute('data-index');
        let messages = JSON.parse(localStorage.getItem('messages')) || [];
        messages.splice(index, 1);
        localStorage.setItem('messages', JSON.stringify(messages));
        loadMessages();
      }
    });

    function showCustomAlert(message) {
      customAlert.textContent = message;
      customAlert.classList.add('show');

      setTimeout(() => {
        customAlert.classList.remove('show');
      }, 2000); // 2 sekund ko'rinadi
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const newMessage = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim(),
      };

      if (!newMessage.name || !newMessage.email || !newMessage.phone || !newMessage.message) {
        alert('Iltimos, barcha maydonlarni to‘ldiring!');
        return;
      }

      const messages = JSON.parse(localStorage.getItem('messages')) || [];
      messages.push(newMessage);
      localStorage.setItem('messages', JSON.stringify(messages));

      form.reset();
      loadMessages();

      showCustomAlert('✅ Message sent successfully!');
    });

    window.addEventListener('DOMContentLoaded', loadMessages);
