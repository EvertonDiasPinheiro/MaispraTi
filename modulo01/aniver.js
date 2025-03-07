const perfilProfissional = {
    nome: "Everton Dias Pinheiro",
    formacao: "Graduado em Ciência da Computação",
    especializacao: "Especializado em Cyber Security",
    experiencia: [
        "Experiência prática em desenvolvimento de software",
        "Participação no programa 'Hackers do Bem', ampliando conhecimento em segurança da informação e práticas éticas de hacking"
    ],
    habilidades: [
        "Java", "Python", "Kotlin", "HTML", "CSS", "Cloud Computing", "Infraestrutura", "CI/CD Pipeline", "Segurança da Informação", "Inteligência Artificial"
    ],
    objetivo: "Busco novos desafios e oportunidades para aplicar minhas habilidades em projetos reais, visando contribuir para um ambiente digital mais seguro e eficiente.",
    descricao: function() {
        return `${this.nome} | ${this.formacao} | ${this.especializacao} | ${this.habilidades.join(", ")} | ${this.objetivo}`;
    }
};
console.log(perfilProfissional.descricao());
