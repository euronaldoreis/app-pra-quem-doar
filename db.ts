export const mockData: any = {
  causes: [
    { key: "animais", title: "Animais" },
    { key: "criancas", title: "Crianças" },
    { key: "esportes", title: "Esportes" },
    { key: "educacao", title: "Educação" },
    { key: "idosos", title: "Idosos" },
    { key: "jovens", title: "Jovens" },
    { key: "meio_ambiente", title: "Meio Ambiente" },
    { key: "mulheres", title: "Mulheres" },
    { key: "saude", title: "Saúde" },
  ],

  necessities: [
    { key: "alimentos", title: "Alimentos não-perecíveis" },
    { key: "material_limpeza", title: "Material de limpeza" },
    { key: "material_escolar", title: "Material escolar" },
    { key: "monetario", title: "Monetário" },
    { key: "roupas", title: "Roupas" },
    { key: "racao", title: "Ração" },
  ],

  institutions: [
    {
      id: 1,
      name: "Abrigo de Animais",
      about:
        "O Abrigo de Animais foi criado para regastar e cuidar de animais em situação de abandono.",
      photo: "/uploads/abrigo_de_animais.jpg",
      causes: ["animais"],
      necessities: ["Ração", "Monetário"],
      contact: {
        address: "Rua ABC, 123 - Novo Mundo - Manaus - AM, Brasil",
        email: "abrigo_de_animais@gmail.com",
        phone: "(92) 99999-8888",
        website: "www.abrigodeanimais.com.br",
        social_media: [
          { type: "facebook", user: "abrigo_de_animais" },
          { type: "instagram", user: "abrigo_de_animais" },
        ],
      },
    },
    {
      id: 2,
      name: "Criança Feliz",
      about: "",
      photo: "/uploads/crianca_feliz.jpg",
      causes: ["criancas", "educacao"],
      necessities: [
        "Alimentos não-perecíveis",
        "Roupas",
        "Material escolar",
        "Monetário",
      ],
      contact: {
        address: "Rua ABC, 123 - Novo Mundo - Manaus - AM, Brasil",
        email: "abrigo_de_animais@gmail.com",
        phone: "(92) 99999-8888",
        website: "www.abrigodeanimais.com.br",
        social_media: [
          { type: "facebook", user: "crianca_feliz" },
          { type: "instagram", user: "crianca_feliz" },
        ],
      },
    },
    {
      id: 3,
      name: "Casa do Idoso - Amor à Vida",
      about: "",
      photo: "/uploads/amor_a_vida.jpg",
      causes: ["idosos", "educacao"],
      necessities: [
        "Alimentos não-perecíveis",
        "Roupas",
        "Material de limpeza",
        "Monetário",
      ],
      contact: {
        address: "Rua ABC, 123 - Novo Mundo - Manaus - AM, Brasil",
        email: "abrigo_de_animais@gmail.com",
        phone: "(92) 99999-8888",
        website: "www.abrigodeanimais.com.br",
        social_media: [
          { type: "facebook", user: "casa_do_idoso" },
          { type: "instagram", user: "casa_do_idoso" },
        ],
      },
    },
  ],
};
