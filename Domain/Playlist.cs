

namespace Domain
{
    public class Playlist
    {
        public Guid Id { get; set; }
        public string  Name { get; set; }
        public int UserId { get; set; }
        public string Image { get; set; }
        public string Description { get; set; } 
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}