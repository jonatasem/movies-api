const movies = [
    {
        id: 1,
        title: 'Um Sonho de Liberdade', 
        year: 1994,
        img: 'um-sonho-de-liberdade.jpg',
        rating: 9.3, 
        description: 'Um banqueiro condenado injustamente enfrenta a dura realidade da vida na prisão.' ,
        src: 'https://mega.nz/embed/34knmSYC#67wYyRyNJrcHSlEq9YQagN_pOVSc4pDIjAPKqkw2Da0!1a'
    },
    {
        id: 2,
        title: 'O Poderoso Chefão', 
        year: 1972, 
        img: 'o-poderoso-chefao.jpg',
        rating: 9.2, 
        description: 'A história da poderosa família mafiosa Corleone.',
        src: 'https://mega.nz/embed/qt9zSCLK#znLV8jrk9io0pGvDU_kStziJboT0uf4_273NQDwLOIU'
    },
    {
        id: 3,
        title: 'O Poderoso Chefão – Parte II', 
        year: 1974, 
        img: 'o-poderoso-chefao-parte-2.jpg',
        rating: 9.0, 
        description: 'Continuação da saga da família Corleone.',
        src: 'https://mega.nz/embed/qt9zSCLK#znLV8jrk9io0pGvDU_kStziJboT0uf4_273NQDwLOIU'
    },
    {
        id: 4,
        title: 'Batman: O Cavaleiro das Trevas', 
        year: 2008, 
        img: 'batman-o-cavaleiro-das-trevas.jpg',
        rating: 9.0, 
        description: 'Batman enfrenta o Coringa em Gotham City.',
        src: 'https://mega.nz/embed/XolRAY4I#QrBlLyvRpraEYNa-chLzC2dHeu5-f9rp2hrI7n6F9-Y'
    },
    {
        id: 5,
        title: '12 Homens e uma Sentença', 
        year: 1957, 
        img: '12-homens-e-uma-sentenca.jpg',
        rating: 8.9, 
        description: 'Doze jurados devem decidir a culpa ou inocência de um réu.',
        src: 'https://mega.nz/embed/z91TARjQ#PxNTYWzHNgdGruhYFoXd_pVdFFrQRkdaFe8a66CI1l8'
    },
    {
        id: 6,
        title: 'A Lista de Schindler', 
        year: 1993, 
        img: 'a-lista-de-schindler.jpg',
        rating: 8.9, 
        description: 'Um empresário salva a vida de mais de mil judeus durante o Holocausto.',
        src: 'https://mega.nz/embed/38MSgaSJ#rez-JG7V5SXswYNzCz5fcVif_8m0AiBORaY-Kzz3dow'
    },
    {
        id: 7,
        title: 'O Senhor dos Anéis: O Retorno do Rei', 
        year: 2003, 
        img: 'o-senhor-dos-anéis-o-retorno-do-rei.jpg',
        rating: 8.9, 
        description: 'Frodo e Sam continuam sua jornada para destruir o Um Anel.',
        src: 'https://mega.nz/embed/flkRBYAY#8RXYmMTCHXu3sLvlGwsS_qlfxCv3wGUrlWICRXa47x0'
    },
    {
        id: 8,
        title: 'Pulp Fiction: Tempo de Violência', 
        year: 1994, 
        img: 'pulp-fiction.jpg',
        rating: 8.9, 
        description: 'Histórias interligadas de personagens diversos em Los Angeles.',
        src: 'https://mega.nz/embed/a4kQ1T7b#E7STnJF-wT4sEmvPyZJoL9R2AN-iRNczKCqKxLym3h8'
    },
    {
        id: 9,
        title: 'O Bom, o Mau e o Feio', 
        year: 1966, 
        img: 'o-bom-o-mau-e-o-feio.jpg',
        rating: 8.8, 
        description: 'Três pistoleiros buscam um tesouro durante a Guerra Civil Americana.',
        src: 'https://mega.nz/embed/mlshyCyZ#njiLyWb5vViAI_3opXnvYv3dtzlnWkIZu90oXtI5QuU'
    },
    {
        id: 10,
        title: 'Clube da Luta', 
        year: 1999, 
        img: 'clube-da-luta.jpg',
        rating: 8.8, 
        description: 'Um homem insatisfeito forma um clube de luta com um vendedor de sabão.',
        src: 'https://mega.nz/embed/u0lglbqa#x7aYSHD3M2YiKASOIwK-eKwKOstbXlmwvd9Sfd1YPgU'
    },
    {
        id: 11,
        title: 'Forrest Gump: O Contador de Histórias', 
        year: 1994, 
        img: 'forrest-gump.jpg',
        rating: 8.8, 
        description: 'A vida extraordinária de um homem comum.',
        src: 'https://mega.nz/embed/65cnTTzS#ovkZo_a4f1H9rRJ7HQ-mk_j2qm81zvXNsD8eTUDH0B8'
    },
    {
        id: 12,
        title: 'O Senhor dos Anéis: A Sociedade do Anel', 
        year: 2001, 
        img: 'o-senhor-dos-anéis-a-sociedade-do-anel.jpg',
        rating: 8.8, 
        description: 'Frodo herda um anel poderoso e perigoso.',
        src: 'https://mega.nz/embed/6tF2lBpS#hNZk4B3_gafGSQhfiEEcU9qNa88dbo3zblqDgoJ54Dw'
    },
    {
        id: 13,
        title: 'Star Wars: Episódio V – O Império Contra-Ataca', 
        year: 1980, 
        img: 'star-wars-episodio-v-o-imperio-contra-ataca.jpg',
        rating: 8.7, 
        description: 'A Aliança Rebelde enfrenta o Império Galáctico.',
        src: 'https://mega.nz/embed/uo0SVSJJ#DF9kB8LRujkcJLImBAwxjVQ2pl79XTO056GBlYj_fyo'
    },
    {
        id: 14,
        title: 'O Silêncio dos Inocentes', 
        year: 1991, 
        img: 'o-silencio-dos-inocentes.jpg',
        rating: 8.6, 
        description: 'Uma agente do FBI entrevista um psicopata para capturar um assassino.',
        src: 'https://mega.nz/embed/7g8XVayI#a0k8QS2ydOqWIbLeM_hE19SXxYUWKHyCOtimuUnUEZw'
    },
    {
        id: 15,
        title: 'Interestelar', 
        year: 2014, 
        img: 'interestelar.jpg',
        rating: 8.6, 
        description: 'Uma missão espacial em busca de um novo planeta habitável.',
        src: 'https://mega.nz/embed/z1kFXAgb#c5NNj8AiZCIyJBqfuTrIDHOWvx9F2YRKg4rtMByHvR0'
    },
    {
        id: 16,
        title: 'Matrix', 
        year: 1999, 
        img: 'matrix.jpg',
        rating: 8.6, 
        description: 'Um hacker descobre a verdade sobre sua realidade.',
        src: 'https://mega.nz/embed/2h8VFQoJ#_K6JZaspKdXq1QNkSvJrSZT2yzP6irYqUvb1rGzk-N4'
    }
];

module.exports = movies;
