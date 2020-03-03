using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace CadastroDePessoas.Models
{
    public class CadastroDePessoasContext : DbContext
    {
        public CadastroDePessoasContext (DbContextOptions<CadastroDePessoasContext> options)
            : base(options)
        {
        }

        public DbSet<CadastroDePessoas.Models.People> People { get; set; }
    }
}
