using Microsoft.EntityFrameworkCore;
using Schools.Models;

namespace Schools.Data
{
    public class SchoolsContext : DbContext
    {
        public DbSet<Schools.Models.School> School { get; set; }
        public SchoolsContext(DbContextOptions<SchoolsContext> options)
            : base(options)
        {}
        public DbSet<Schools.Models.Teacher> Teacher { get; set; }
        public DbSet<Schools.Models.Review> Review { get; set; }
        public DbSet<Schools.Models.Student> Student { get; set; }
        public DbSet<Schools.Models.Ranking> Ranking { get; set; }
    }
}
