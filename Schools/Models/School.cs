using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Schools.Models
{
    public class School
    {
        public Guid ID { set; get; }
        public string Name { set; get; }
        public string Address { set; get; }
        public string ContactNumber { set; get; }
        public decimal LastAverage { set; get; }
    }
}
