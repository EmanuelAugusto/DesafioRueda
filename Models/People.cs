using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CadastroDePessoas.Models
{
    public class People
    {
        public int Id { get; set; }
        public string NomeCompleto { get; set; }
        public string DataNascimento { get; set; }
        public decimal Salario { get; set; }

    }
}
