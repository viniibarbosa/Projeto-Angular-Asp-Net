using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api_Filmes_BackEnd
{
    public class Filme
    {
        public int FilmeId { get; set; }

        public string NomeDoFilme { get; set; }

        public int Duracao { get; set; }

        public string Diretor { get; set; }
    }
}
