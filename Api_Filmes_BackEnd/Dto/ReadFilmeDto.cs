using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Api_Filmes_BackEnd.Dto
{
    public class ReadFilmeDto
    {
        [Required(ErrorMessage = "O nome do filme é obrigatório"), StringLength(50, ErrorMessage = "Máximo de caracteres: ")]
        public string NomeDoFilme { get; set; }
        [Required(ErrorMessage = "A duração do filme é obrigatória"), Range(30, 500)]
        public int Duracao { get; set; }

        public string Diretor { get; set; }
    }
}
