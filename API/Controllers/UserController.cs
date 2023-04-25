using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    [Authorize]
    public class UserController: BaseApiController
    {
        private readonly DataContext _context;

        public UserController(DataContext context)
        {
            _context = context;
        }
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers()
        {
            var users = await _context.Myproperty.ToListAsync();

            return users;
        }
               
        [HttpGet("{id}")]

        public async Task<ActionResult<AppUser>> GetUser(int id)
        {
            return await _context.Myproperty.FindAsync(id);
        }

    }
}