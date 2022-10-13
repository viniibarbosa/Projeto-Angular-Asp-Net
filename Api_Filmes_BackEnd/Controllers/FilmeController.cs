using Api_Filmes_BackEnd.Data;
using Api_Filmes_BackEnd.Dto;
using AutoMapper;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api_Filmes_BackEnd.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FilmeController : ControllerBase
    {
        public FilmeDbContext _contexto;
        public IMapper _mapper;

        public FilmeController(FilmeDbContext contexto, IMapper imapper)
        {
            _contexto = contexto;
            _mapper = imapper;
        }

        [HttpPost]
        public IActionResult AdicionarFilme(CreateFilmeDto filmeDto)
        {
            Filme filme = _mapper.Map<Filme>(filmeDto);
            _contexto.Add(filme);
            _contexto.SaveChanges();
            return Ok();
        }

        [HttpGet]
        public IEnumerable<Filme> ListarFilmes()
        {
            return _contexto.Filmes;
        }

        [HttpGet("{id}")]
        public IActionResult RecuperaFilmePorId(int id)
        {
            Filme filme = _contexto.Filmes.FirstOrDefault(filme => filme.FilmeId == id);
            if(filme ==null)
            {
                return NotFound();
            }
            ReadFilmeDto filmeDto = _mapper.Map<ReadFilmeDto>(filme);
            return Ok(filmeDto);
        }

        [HttpDelete("{id}")]
        public IActionResult Deletar(int id)
        {
            Filme filme = _contexto.Filmes.FirstOrDefault(filme => filme.FilmeId == id);
            if(filme == null)
            {
                return NotFound();
            }
            _contexto.Remove(filme);
            _contexto.SaveChanges();
            return NoContent();
        }

        [HttpPut("{id}")]
        public IActionResult AtualizaFilme(int id, [FromBody] UpdateFilmeDto filmeDto)
        {
            Filme filme = _contexto.Filmes.FirstOrDefault(filme => filme.FilmeId == id);
            if (filme == null)
            {
                return NotFound();
            }
            _mapper.Map(filmeDto, filme);
            _contexto.SaveChanges();
            return NoContent();
        }


    }
}
