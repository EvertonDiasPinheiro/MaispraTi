// Configuração do Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 10,

    autoplay: {
        delay: 3000, // Tempo entre as transições (em milissegundos)
        disableOnInteraction: false, // Continua o autoplay mesmo após interação
    },
    speed: 600, // Velocidade da transição (em milissegundos)
  }

);

// Função para carregar os serviços
function loadServices() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        const servicesContainer = document.querySelector('.services-container');
        // Populando os 6 primeiros serviços como exemplo
        data.slice(0, 6).forEach(service => {
          const serviceCard = document.createElement('div');
          serviceCard.classList.add('service-card');
          serviceCard.innerHTML = `
            <h3>${service.title}</h3>
            <p>${service.body}</p>
          `;
          servicesContainer.appendChild(serviceCard);
        });
      })
      .catch(error => console.error('Erro ao carregar os serviços:', error));
  }
  
  // Carregar os serviços ao iniciar a página
  loadServices();

  
// Função para carregar os depoimentos
function loadTestimonials() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        const testimonialsContainer = document.querySelector('.testimonials-container');
        // Populando os primeiros 4 depoimentos como exemplo
        data.slice(0, 4).forEach(testimonial => {
          const testimonialCard = document.createElement('div');
          testimonialCard.classList.add('testimonial-card');
          testimonialCard.setAttribute('data-aos', 'fade-up');  // Animação AOS.js
  
          testimonialCard.innerHTML = `
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Foto do Cliente">
            <h3>${testimonial.name}</h3>
            <p>${testimonial.body}</p>
          `;
          testimonialsContainer.appendChild(testimonialCard);
        });
      })
      .catch(error => console.error('Erro ao carregar os depoimentos:', error));
  }
  
  // Carregar os depoimentos ao iniciar a página
  loadTestimonials();

  
// Função para validar o formulário de contato
function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (name === '' || email === '' || phone === '' || message === '') {
      alert('Todos os campos são obrigatórios!');
      return false;
    }
  
    // Validação do email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert('Por favor, insira um email válido!');
      return false;
    }
  
    return true;
  }
  
// Configurar EmailJS
const serviceID = 'service_tms3u0l'; // Substitua pelo seu Service ID do EmailJS
const templateID = 'template_n6iztjg'; // Substitua pelo seu Template ID do EmailJS
const userID = 'B-3Z7FZYqC32QS5ZusBkX'; // Substitua pelo seu User ID do EmailJS

// Função para enviar os dados do formulário usando EmailJS
function sendEmail(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Verificar se o formulário é válido
  if (!validateForm()) {
    return;
  }

  // Obter os dados do formulário
  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    message: document.getElementById('message').value,
  };

  // Enviar os dados usando EmailJS
  emailjs.send(serviceID, templateID, formData, userID)
    .then((response) => {
      // Mostrar mensagem de sucesso
      document.getElementById('responseMessage').innerText = 'Mensagem enviada com sucesso!';
    }, (error) => {
      // Mostrar mensagem de erro
      document.getElementById('responseMessage').innerText = 'Erro ao enviar mensagem. Tente novamente.';
      console.error(error);
    });

  // Limpar o formulário após envio
  document.getElementById('contactForm').reset();
}

// Adicionar o evento de envio do formulário
document.getElementById('contactForm').addEventListener('submit', sendEmail);

  