using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MoK_PT1d2_API.Models;

namespace MoK_PT1d2_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly PT1Context _context;

        public LoginController(PT1Context context)
        {
            _context = context;
        }
        // GET: api/Login
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var loginData = _context.LoginInfo.ToList();

                return Ok(loginData);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Something went wrong: {ex.Message}");
            }
        }

        // GET: api/Login/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Login
        [HttpPost]
        public ActionResult Post([FromBody] Login loginData)
        {

            if (_context.LoginInfo.Any(x => x.UserName == loginData.UserName && x.Password == loginData.Password))
            {
                var loggedIn = _context.LoginInfo.Where(x => x.UserName == loginData.UserName && x.Password == loginData.Password).ToList();
                return Ok(loggedIn[0].Id);
            }
            else
            {
                return NotFound();
            }
        }

        //// PUT: api/Login/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ApiWithActions/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
