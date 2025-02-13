using Microsoft.EntityFrameworkCore;
using TextPostsAPI.Models;

namespace TextPostsAPI.Data
{
    public class TextPostsDbContext : DbContext
    {
        public TextPostsDbContext(DbContextOptions<TextPostsDbContext> options) : base(options) { }

        public DbSet<Post> Posts { get; set; }
    }
}
