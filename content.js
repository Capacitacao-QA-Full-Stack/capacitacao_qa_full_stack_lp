const pageContent = {
  hero: {
    badge: "Torne-se um QA Full Stack",
    title: "Capacitação QA Full Stack",
    description:
      "Uma plataforma para você **aprender** as principais **ferramentas** usadas no mercado de trabalho. Mais do que um ambiente de cursos, uma **comunidade para estudar**, realizar **desafios de teste** e se desenvolver.",
    ctaLabel: "Garantir minha vaga",
    whatsappLabel: "Tirar uma dúvida",
  },
  sections: {
    audience: {
      title: "Venha estudar e se desenvolver como QA Full Stack você que:",
      items: [
        "Está **começando em testes** e quer aprender as principais ferramentas usadas no mercado de trabalho.",
        "Já testa na mão e quer partir para **API**, **automação** e **pipeline**.",
        "Quer se preparar para a **CTFL** com o **syllabus** na ordem dos capítulos.",
        "Prefere **trilhas** reunidas numa plataforma para estudar e praticar.",
        "Quer praticar com **projeto** e **desafio**, além das aulas.",
      ],
    },
    visual: {
      title: "O que a plataforma reúne",
      items: [
        "**Cursos das ferramentas principais de mercado**",
        "**Conteúdo exclusivo** para a formação",
        "O **mesmo professor** em toda a formação para manter a qualidade do conteúdo",
        "Acesso a **lives** ao vivo",
        "**Comunidade exclusiva** para estudar e praticar",
        "**Aplicações exclusivas** para testes e desafios para praticar",
      ],
    },
    available: {
      title: "Já na plataforma",
      courses: [
        {
          title: "Trilha iniciante",
          text: "Fundamentos, níveis, tipos, técnicas e escrita de teste.",
          image: "assets/capa-iniciante.jpg",
          alt: "Capa da trilha iniciante, com laptop, checklist e lupa sobre um bug",
        },
        {
          title: "Postman",
          text: "ServeRest, Newman e performance no ambiente local.",
          image: "assets/capa-api.jpg",
          alt: "Capa do curso de testes de API, com nuvem API e ícone do Postman",
        },
        {
          title: "Robot com Appium",
          text: "Testes mobile no Android, do projeto ao CI/CD do curso.",
          image: "assets/capa-robot.jpg",
          alt: "Capa do curso de automação mobile com Robot Framework e Android",
        },
        {
          title: "CTFL",
          text: "Preparatórios 3.1.1 e 4.0, com capítulos e simulados.",
          image: "assets/capa-ctfl.jpg",
          alt: "Capa do preparatório CTFL, com o selo ISTQB Certified Tester Foundation Level",
        },
      ],
      extra: [
        "**E tem muito mais por vir**",
      ],
    },
    soon: {
      title: "Em breve",
      courses: [
        {
          title: "Lives",
          text: "Encontros ao vivo dentro da plataforma.",
        },
        {
          title: "Testes com Cypress",
          text: "E2E, API e CI/CD aplicado a testes.",
        },
        {
          title: "Versionamento",
          text: "Git, GitHub e GitLab.",
        },
        {
          title: "CI/CD",
          text: "GitHub Actions e GitLab CI.",
        },
        {
          title: " Trilha Robot Framework",
          text: "Robot web, API e CI/CD.",
        },
        {
          title: " Trilha Ferramentas de teste de API",
          text: "Bruno e Insomnia.",
        },
      ].map((course) => ({
        ...course,
        image: "assets/capa-em-breve.jpg",
        alt: "Capa em breve, com laptop e o selo Em breve",
      })),
    },
    note: {
      text: "Vídeos e materiais disponíveis na área de **membros** para acompanhar as aulas e fazer quando quiser.",
    },
  },
  footer: {
    title: "Pronto(a) para entrar na Capacitação QA Full Stack?",
    checkoutLabel: "Garantir minha vaga",
    whatsappLabel: "Tirar dúvidas no WhatsApp",
    note: "Acesso pela área de membros depois da compra.",
  },
};

function fillMarkedElement(element, text) {
  element.innerHTML = "";
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  parts.forEach((part) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      const mark = document.createElement("strong");
      mark.className = "text-highlight";
      mark.textContent = part.slice(2, -2);
      element.appendChild(mark);
    } else if (part) {
      element.appendChild(document.createTextNode(part));
    }
  });
}

function renderList(listElementId, items) {
  const listElement = document.getElementById(listElementId);
  if (!listElement) return;

  listElement.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    fillMarkedElement(li, item);
    listElement.appendChild(li);
  });
}

function renderCovers(listElementId, courses) {
  const container = document.getElementById(listElementId);
  if (!container) return;

  container.innerHTML = "";
  courses.forEach((course) => {
    const card = document.createElement("article");
    card.className = "cover-card";

    if (course.image) {
      const img = document.createElement("img");
      img.src = course.image;
      img.alt = course.alt || course.title;
      card.appendChild(img);
    }

    const title = document.createElement("h3");
    title.textContent = course.title;

    const text = document.createElement("p");
    text.textContent = course.text;

    card.append(title, text);
    container.appendChild(card);
  });
}

function renderLandingPage() {
  document.getElementById("hero-badge").textContent = pageContent.hero.badge;
  document.getElementById("hero-title").textContent = pageContent.hero.title;
  fillMarkedElement(
    document.getElementById("hero-description"),
    pageContent.hero.description
  );
  document.getElementById("hero-cta").textContent = pageContent.hero.ctaLabel;
  document.getElementById("hero-whatsapp").textContent =
    pageContent.hero.whatsappLabel;

  document.getElementById("audience-title").textContent =
    pageContent.sections.audience.title;
  renderList("audience-list", pageContent.sections.audience.items);

  document.getElementById("visual-title").textContent =
    pageContent.sections.visual.title;
  renderList("visual-list", pageContent.sections.visual.items);

  document.getElementById("available-title").textContent =
    pageContent.sections.available.title;
  renderCovers("available-list", pageContent.sections.available.courses);
  renderList("available-extra", pageContent.sections.available.extra);

  document.getElementById("soon-title").textContent =
    pageContent.sections.soon.title;
  renderCovers("soon-list", pageContent.sections.soon.courses);

  fillMarkedElement(
    document.getElementById("note-text"),
    pageContent.sections.note.text
  );

  document.getElementById("footer-title").textContent = pageContent.footer.title;
  document.getElementById("footer-checkout").textContent =
    pageContent.footer.checkoutLabel;
  document.getElementById("footer-whatsapp").textContent =
    pageContent.footer.whatsappLabel;
  document.getElementById("footer-note").textContent = pageContent.footer.note || "";
}

renderLandingPage();
