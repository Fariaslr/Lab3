interface TArtigo {
    titulo : string;
    autores: string[];
}

interface TLivro extends TArtigo {
    editora : string
}

export {TArtigo,TLivro}