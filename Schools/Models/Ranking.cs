using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Schools.Models
{
    public class Ranking
    {
        public Guid id { set; get; }
        public int StudentId { set; get; }
        public decimal grade { set; get; }
    }
}
