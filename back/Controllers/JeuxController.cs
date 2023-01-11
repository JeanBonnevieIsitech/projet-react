using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JeuxController : ControllerBase
    {
        private readonly JeuContext _context;

        public JeuxController(JeuContext context)
        {
            _context = context;
        }

        // GET: api/Jeux
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Jeu>>> GetJeux()
        {
            return await _context.Jeux.ToListAsync();
        }

        // GET: api/Jeux/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Jeu>> GetJeu(int id)
        {
            var jeu = await _context.Jeux.FindAsync(id);

            if (jeu == null)
            {
                return NotFound();
            }

            return jeu;
        }

        // PUT: api/Jeux/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}/{name}/{description}")]
        public async Task<IActionResult> PutJeu(int id, Jeu jeu)
        {
            if (id != jeu.Id)
            {
                return BadRequest();
            }

            _context.Entry(jeu).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JeuExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Jeux
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Jeu>> PostJeu(Jeu jeu)
        {
            _context.Jeux.Add(jeu);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJeu", new { id = jeu.Id }, jeu);
        }

        // DELETE: api/Jeux/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJeu(int id)
        {
            var jeu = await _context.Jeux.FindAsync(id);
            if (jeu == null)
            {
                return NotFound();
            }

            _context.Jeux.Remove(jeu);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool JeuExists(int id)
        {
            return _context.Jeux.Any(e => e.Id == id);
        }
    }
}
