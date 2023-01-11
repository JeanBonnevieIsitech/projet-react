using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models
{
    public class JeuContext : DbContext
    {
        public JeuContext(DbContextOptions<JeuContext> options) : base(options)
        {

        }

        public DbSet<Jeu> Jeux { get; set; }
    }
}
