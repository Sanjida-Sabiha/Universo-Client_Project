
const heading_span = document.getElementById('heading_span');
const heading = document.getElementById('heading');
const description = document.getElementById('description');
const head_btn = document.getElementById('head_btn');
const head_btn1 = document.getElementById('head_btn1');
const b_span = document.getElementById('b_span');
const b_span1 = document.getElementById('b_span1');
const b_p = document.getElementById('b_p');
const m_title = document.getElementById('m_title');
const m_p = document.getElementById('m_p');
const m_boxT = document.getElementById('m_boxT');
const m_boxP = document.getElementById('m_boxP');
const m_boxT1 = document.getElementById('m_boxT1');
const m_boxP1 = document.getElementById('m_boxP1');
const m_boxT2 = document.getElementById('m_boxT2');
const m_boxP2 = document.getElementById('m_boxP2');
const m_boxT3 = document.getElementById('m_boxT3');
const m_boxP3 = document.getElementById('m_boxP3');
const story_T = document.getElementById('story_T');
const story_P = document.getElementById('story_P');
const do_T = document.getElementById('do_T');
const do_T1 = document.getElementById('do_T1');
const do_P1 = document.getElementById('do_P1');
const do_T2 = document.getElementById('do_T2');
const do_P2 = document.getElementById('do_P2');
const do_T3 = document.getElementById('do_T3');
const do_P3 = document.getElementById('do_P3');
const do_T4 = document.getElementById('do_T4');
const do_P4 = document.getElementById('do_P4');
const dev_T = document.getElementById('dev_T');
const dev_T1 = document.getElementById('dev_T1');
const dev_P1 = document.getElementById('dev_P1');
const dev_T2 = document.getElementById('dev_T2');
const dev_P2 = document.getElementById('dev_P2');
const dev_T3 = document.getElementById('dev_T3');
const dev_P3 = document.getElementById('dev_P3');
const dev_T4 = document.getElementById('dev_T4');
const dev_P4 = document.getElementById('dev_P4');
const why_T = document.getElementById('why_T');
const why_T1 = document.getElementById('why_T1');
const why_P1 = document.getElementById('why_P1');
const why_T2 = document.getElementById('why_T2');
const why_P2 = document.getElementById('why_P2');
const why_T3 = document.getElementById('why_T3');
const why_P3 = document.getElementById('why_P3');
const why_T4 = document.getElementById('why_T4');
const why_P4 = document.getElementById('why_P4');
const suc_T = document.getElementById('suc_T');
const suc_T1 = document.getElementById('suc_T1');
const suc_P1 = document.getElementById('suc_P1');
const suc_T2 = document.getElementById('suc_T2');
const suc_P2 = document.getElementById('suc_P2');
const glob_T = document.getElementById('glob_T');
const glob_P = document.getElementById('glob_P');
const glob_T1 = document.getElementById('glob_T1');
const glob_P1 = document.getElementById('glob_P1');
const glob_T2 = document.getElementById('glob_T2');
const glob_P2 = document.getElementById('glob_P2');
const glob_T3 = document.getElementById('glob_T3');
const glob_P3 = document.getElementById('glob_P3');
const her_T = document.getElementById('her_T');
const her_P = document.getElementById('her_P');
const her_T1 = document.getElementById('her_T1');
const her_P1 = document.getElementById('her_P1');
const her_T2 = document.getElementById('her_T2');
const her_P2 = document.getElementById('her_P2');
const her_T3 = document.getElementById('her_T3');
const her_P3 = document.getElementById('her_P3');
const foot_P = document.getElementById('foot_P');



const content = {
    en: {
    "heading_span": "Welcome to Universo Magnánimo",
    "heading": "Based in Portugal, Connecting Innovators Worldwide",
    "description": "Nestled in the vibrant tech hub of Portugal, Universo Magnánimo bridges visionary companies across the US, Canada, Europe, and Australia with exceptional IT developers. We're your global gateway to unparalleled technological collaboration.",
    "head_btn":"Get Started",
    "head_btn1":"Get Started",
    "b_span":"A Message from Our Director",
    "b_span1":"Viktor Paul – Founder & Passionate Technologist",
    "b_p":"'App development isn't just about building software; it's about crafting experiences that resonate across continents. Growing up amidst Portugal's rich culture and innovation, I dreamed of connecting brilliant minds worldwide. At Universo Magnánimo, we're turning that dream into reality—transforming ideas into apps that make a difference. Join us, and let's shape the future together.'",
    "m_title":"Our Mission",
    "m_p":"At Universo Magnánimo, we're on a mission to:",
    "m_boxT":"Connect Globally: ",
    "m_boxP":"Uniting companies and developers from the US to Australia, fostering collaborations.",
    "m_boxT1":"Empower Innovation:",
    "m_boxP1":"Providing a platform where groundbreaking ideas meet the technical expertise to bring them to life.",
    "m_boxT2":"Cultivate Community: ",
    "m_boxP2":"Building a network where professionals share, grow, and succeed together.",
    "m_boxT3":"Connect Globally: ",
    "m_boxP3":"Uniting companies and developers from the US to Australia, fostering collaborations.",
    "story_T":"Who we are",
    "story_P":"Founded in Portugal, a land of explorers and innovators, we carry forward the spirit of discovery. Our team is dedicated to connecting you with top-tier IT talent worldwide, ensuring your projects are handled with the passion and precision they deserve.",
    "do_T":"What We Do",
    "do_T1":"Global Talent Access:",
    "do_P1":"Tap into a diverse pool of skilled developers ready to tackle your challenges.",
    "do_T2":"Personalized Matching:",
    "do_P2":"Our platform aligns your specific needs with developers who share your vision.",
    "do_T3":"Seamless Collaboration:",
    "do_P3":"With tools designed for efficiency, managing international projects has never been easier.",
    "do_T4":"Cultural Synergy:",
    "do_P4":"Benefit from our understanding of cross-cultural communication to enhance project outcomes.",
    "dev_T":"For Developers",
    "dev_T1":"Exciting Opportunities:",
    "dev_P1":"Work on impactful projects with companies around the globe.",
    "dev_T2":"Professional Growth:",
    "dev_P2":"Expand your skills and portfolio by tackling diverse challenges.",
    "dev_T3":"Supportive Network:",
    "dev_P3":"Join a community that values your contribution and supports your journey.",
    "dev_T4":"Fair & Transparent:",
    "dev_P4":"Enjoy fair compensation and clear communication every step of the way.",
    "why_T":"Why Choose Universo Magnánimo?",
    "why_T1":"Portuguese Excellence, Global Impact:",
    "why_P1":"Leveraging Portugal's burgeoning tech scene to serve clients worldwide.",
    "why_T2":"Passionate Leadership:",
    "why_P2":"Guided by Viktor Paul's vision and enthusiasm for app development.",
    "why_T3":"Diverse Expertise:",
    "why_P3":"Our international team brings a wealth of knowledge from different markets and industries.",
    "why_T4":"Commitment to Quality:",
    "why_P4":"We uphold the highest standards to deliver solutions that exceed expectations.",
    "suc_T":"Success Stories",
    "suc_T1":"Transforming Retail in the US",
    "suc_P1":"A New York-based retailer wanted to enhance their customer's mobile shopping experience. Through Universo Magnánimo, they collaborated with innovative developers who revamped their app, leading to a 40% increase in user engagement.",
    "suc_T2":"Sustainable Solutions in Europe",
    "suc_P2":"A German environmental startup sought to create an app that empowers communities to engage in sustainable practices. Our platform connected them with passionate developers, resulting in an award-winning app making waves across Europe.",
    
    "glob_T":"Our Global Reach",
    "glob_P":"Operating across four continents, we understand the nuances of different markets:",
    "glob_T1":"North America:",
    "glob_P1":"Staying ahead in the fast-paced tech landscapes of the US and Canada.",
    "glob_T2":"Europe:",
    "glob_P2":"Integrating diverse cultures and regulations to deliver seamless solutions.",
    "glob_T3":"Australia:",
    "glob_P3":"Navigating the unique demands of the Australian market with innovative strategies.",

    "her_T":"Embracing Our Portuguese Heritage",
    "her_P":"Portugal isn't just our headquarters—it's the heartbeat of our innovation. With a legacy of exploration, we're inspired to push boundaries and explore new frontiers in technology.",
    "her_T1":"Innovation Hub:",
    "her_P1":"Leveraging Portugal's growing reputation as a tech haven.",
    "her_T2":"Innovation Hub:",
    "her_P2":"Infusing creativity drawn from our rich artistic and cultural heritage.",
    "her_T3":"Strategic Location:",
    "her_P3":"Positioned at the crossroads of continents, facilitating global collaboration.",
    "foot_P":"© 2025 Universo Magnanimo All rights reserved."

},
pt:{
    "heading_span": "Bem-vindo ao Universo Magnânimo",
    "heading": "Com sede em Portugal, conectando inovadores em todo o mundo",
    "description": "Localizado no vibrante polo tecnológico de Portugal, o Universo Magnánimo conecta empresas visionárias dos EUA, Canadá, Europa e Austrália com desenvolvedores de TI excepcionais. Somos a sua porta de entrada global para uma colaboração tecnológica incomparável.",
    "head_btn":"Comece",
    "head_btn1":"Comece",
    "b_span":"Uma mensagem do nosso diretor",
    "b_span1":"Viktor Paul – Fundador e Tecnólogo Apaixonado",
    "b_p":"O desenvolvimento de aplicativos não se resume apenas à criação de software; trata-se de criar experiências que repercutam em todos os continentes. Crescendo em meio à rica cultura e inovação de Portugal, sonhei em conectar mentes brilhantes do mundo todo. No Universo Magnánimo, estamos transformando esse sonho em realidade — transformando ideias em aplicativos que fazem a diferença. Junte-se a nós e vamos moldar o futuro juntos.",
    "m_title":"Nossa Missão",
    "m_p":"No Universo Magnánimo, temos a missão de:",
    "m_boxT":"Conecte-se globalmente: ",
    "m_boxP":"Unindo empresas e desenvolvedores dos EUA à Austrália, promovendo colaborações.",
    "m_boxT1":"Capacite a inovação:",
    "m_boxP1":"Fornecendo uma plataforma onde ideias inovadoras encontram a expertise técnica para torná-las realidade.",
    "m_boxT2":"Cultivar Comunidade: ",
    "m_boxP2":"Construindo uma rede onde profissionais compartilham, crescem e prosperam juntos.",
    "m_boxT3":"Conecte-se globalmente: ",
    "m_boxP3":"Unindo empresas e desenvolvedores dos EUA à Austrália, promovendo colaborações.",
    "story_T":"Quem somos",
    "story_P":"Fundada em Portugal, terra de exploradores e inovadores, levamos adiante o espírito de descoberta. Nossa equipe se dedica a conectar você com os melhores talentos de TI do mundo, garantindo que seus projetos sejam conduzidos com a paixão e a precisão que merecem.",
    "do_T":"O que fazemos",
    "do_T1":"Acesso global a talentos:",
    "do_P1":"Aproveite um grupo diversificado de desenvolvedores qualificados prontos para enfrentar seus desafios.",
    "do_T2":"Correspondência personalizada:",
    "do_P2":"Nossa plataforma alinha suas necessidades específicas com desenvolvedores que compartilham sua visão.",
    "do_T3":"Colaboração perfeita:",
    "do_P3":"Com ferramentas projetadas para eficiência, gerenciar projetos internacionais nunca foi tão fácil.",
    "do_T4":"Sinergia Cultural:",
    "do_P4":"Beneficie-se da nossa compreensão da comunicação intercultural para melhorar os resultados do projeto.",
    "dev_T":"Para desenvolvedores",
    "dev_T1":"Oportunidades emocionantes:",
    "dev_P1":"Trabalhe em projetos impactantes com empresas ao redor do mundo.",
    "dev_T2":"Crescimento Profissional:",
    "dev_P2":"Expanda suas habilidades e portfólio enfrentando desafios diversos.",
    "dev_T3":"Rede de Apoio:",
    "dev_P3":"Junte-se a uma comunidade que valoriza sua contribuição e apoia sua jornada.",
    "dev_T4":"Justo e Transparente:",
    "dev_P4":"Aproveite uma remuneração justa e comunicação clara em cada etapa do processo.",
    "why_T":"Por que escolher o Universo Magnánimo?",
    "why_T1":"Excelência Portuguesa, Impacto Global:",
    "why_P1":"Aproveitando o crescente cenário tecnológico de Portugal para atender clientes no mundo todo.",
    "why_T2":"Liderança Apaixonada:",
    "why_P2":"Guiado pela visão e entusiasmo de Viktor Paul pelo desenvolvimento de aplicativos.",
    "why_T3":"Especialização diversificada:",
    "why_P3":"Nossa equipe internacional traz uma riqueza de conhecimento de diferentes mercados e indústrias.",
    "why_T4":"Compromisso com a Qualidade:",
    "why_P4":"Mantemos os mais altos padrões para entregar soluções que superam as expectativas.",
    "suc_T":"Histórias de sucesso",
    "suc_T1":"Transformando o varejo nos EUA",
    "suc_P1":"Um varejista de Nova York queria aprimorar a experiência de compra móvel dos seus clientes. Por meio do Universo Magnánimo, eles colaboraram com desenvolvedores inovadores que reformularam seu aplicativo, resultando em um aumento de 40% no engajamento dos usuários.",
    "suc_T2":"Soluções Sustentáveis na Europa",
    "suc_P2":"Uma startup ambiental alemã buscou criar um aplicativo que capacitasse comunidades a adotar práticas sustentáveis. Nossa plataforma os conectou a desenvolvedores apaixonados, resultando em um aplicativo premiado que fez sucesso em toda a Europa.",
    "glob_T":"Nosso alcance global",
    "glob_P":"Atuando em quatro continentes, entendemos as nuances dos diferentes mercados:",
    "glob_T1":"América do Norte:",
    "glob_P1":"Mantendo-se à frente nos cenários tecnológicos acelerados dos EUA e Canadá.",
    "glob_T2":"Europa:",
    "glob_P2":"Integrando diversas culturas e regulamentações para fornecer soluções integradas.",
    "glob_T3":"Austrália:",
    "glob_P3":"Navegando pelas demandas exclusivas do mercado australiano com estratégias inovadoras.",
    "her_T":"Abraçando a nossa herança portuguesa",
    "her_P":"Portugal não é apenas a nossa sede — é o coração da nossa inovação. Com um legado de exploração, somos inspirados a desafiar limites e explorar novas fronteiras tecnológicas.",
    "her_T1":"Centro de Inovação:",
    "her_P1":"Aproveitando a crescente reputação de Portugal como um paraíso tecnológico.",
    "her_T2":"Centro de Inovação:",
    "her_P2":"Infundindo criatividade extraída de nossa rica herança artística e cultural.",
    "her_T3":"Localização Estratégica:",
    "her_P3":"Posicionado na encruzilhada dos continentes, facilitando a colaboração global.",
    "foot_P":"© 2025 Universo Magnanimo Todos os direitos reservados."
    
  },
};

function loadContent(lang) {
  const data = content[lang]; // content is your predefined JS object

  if (!data) {
    console.error(`Language data for "${lang}" not found`);
    return;
  }

    heading_span.textContent = data.heading_span;
    heading.textContent = data.heading;
    description.textContent = data.description;
    head_btn.textContent = data.head_btn;
    head_btn1.textContent = data.head_btn1;
    b_span.textContent = data.b_span;
    b_span1.textContent = data.b_span1;
    b_p.textContent = data.b_p;
    m_title.textContent = data.m_title;
    m_p.textContent = data.m_p;
    m_boxT.textContent = data.m_boxT;
    m_boxP.textContent = data.m_boxP;
    m_boxT1.textContent = data.m_boxT1;
    m_boxP1.textContent = data.m_boxP1;
    m_boxT2.textContent = data.m_boxT2;
    m_boxP2.textContent = data.m_boxP2;
    m_boxT3.textContent = data.m_boxT3;
    m_boxP3.textContent = data.m_boxP3;
    story_T.textContent = data.story_T;
    story_P.textContent = data.story_P;
    do_T.textContent = data.do_T;
    do_T1.textContent = data.do_T1;
    do_P1.textContent = data.do_P1;
    do_T2.textContent = data.do_T2;
    do_P2.textContent = data.do_P2;
    do_T3.textContent = data.do_T3;
    do_P3.textContent = data.do_P3;
    do_T4.textContent = data.do_T4;
    do_P4.textContent = data.do_P4;
    dev_T.textContent = data.dev_T;
    dev_T1.textContent = data.dev_T1;
    dev_P1.textContent = data.dev_P1;
    dev_T2.textContent = data.dev_T2;
    dev_P2.textContent = data.dev_P2;
    dev_T3.textContent = data.dev_T3;
    dev_P3.textContent = data.dev_P3;
    dev_T4.textContent = data.dev_T4;
    dev_P4.textContent = data.dev_P4;
    why_T.textContent = data.why_T;
    why_T1.textContent = data.why_T1;
    why_P1.textContent = data.why_P1;
    why_T2.textContent = data.why_T2;
    why_P2.textContent = data.why_P2;
    why_T3.textContent = data.why_T3;
    why_P3.textContent = data.why_P3;
    why_T4.textContent = data.why_T4;
    why_P4.textContent = data.why_P4;
    suc_T.textContent = data.suc_T;
    suc_T1.textContent = data.suc_T1;
    suc_P1.textContent = data.suc_P1;
    suc_T2.textContent = data.suc_T2;
    suc_P2.textContent = data.suc_P2;
    glob_T.textContent = data.glob_T;
    glob_P.textContent = data.glob_P;
    glob_T1.textContent = data.glob_T1;
    glob_P1.textContent = data.glob_P1;
    glob_T2.textContent = data.glob_T2;
    glob_P2.textContent = data.glob_P2;
    glob_T3.textContent = data.glob_T3;
    glob_P3.textContent = data.glob_P3;
    her_T.textContent = data.her_T;
    her_P.textContent = data.her_P;
    her_T1.textContent = data.her_T1;
    her_P1.textContent = data.her_P1;
    her_T2.textContent = data.her_T2;
    her_P2.textContent = data.her_P2;
    her_T3.textContent = data.her_T3;
    her_P3.textContent = data.her_P3;

    foot_P.textContent = data.foot_P;
  } 


// Load default language on page load
loadContent('en');

// Language switcher
document.querySelectorAll('#language-dropdown a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const lang = link.getAttribute('data-lang');
    loadContent(lang);

    // Optional UI styling
    document.querySelectorAll('#language-dropdown a').forEach(el => el.classList.remove('active'));
    link.classList.add('active');
  });
});
