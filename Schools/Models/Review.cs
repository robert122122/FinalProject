using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Schools.Models
{
    public class Review
    {
        public Guid ID { set; get; }
        public string Name { set; get; }
        public int Stars { set; get; }
        public string Message { set; get; }
    }
}
