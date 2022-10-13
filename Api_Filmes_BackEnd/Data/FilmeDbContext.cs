using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api_Filmes_BackEnd.Data
{
    public class FilmeDbContext : DbContext
    {
        public FilmeDbContext(DbContextOptions<FilmeDbContext> opt) : base(opt)
        {

        }

        public DbSet<Filme> Filmes { get; set; }

        
    }
}
