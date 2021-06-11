using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Schools.Models
{
    public class Teacher
    {
        public Guid ID { set; get; }
        public string FirstName { set; get; }
        public string LastName { set; get; }
        public string Course { set; get; }
        public int SchoolId { set; get; }
        public int Review { set; get; }
        
    }
}
