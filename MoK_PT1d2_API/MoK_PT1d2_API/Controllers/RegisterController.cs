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
    public class RegisterController : ControllerBase
    {
        private readonly PT1Context _context;

        public RegisterController(PT1Context context)
        {
            _context = context;
        }

        // GET: api/Register
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var userInformation = _context.UsersInfo.ToList();

                return Ok(userInformation);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Something went wrong: {ex.Message}");
            }
        }

        // GET: api/Register/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }

        public class RegisterClass
        {
           public string UserName;
           public string Password;
           public DateTime DateOfBirth;

        }

        // POST: api/Register
        [HttpPost]
        public ActionResult Post([FromBody] RegisterClass userInformation)
        {

            if (!_context.LoginInfo.Any(x => x.UserName == userInformation.UserName) && userInformation.UserName != null && userInformation.Password != null && userInformation.DateOfBirth != null)
            {
                Login currentLogin = new Login();
                currentLogin.UserName = userInformation.UserName;
                currentLogin.Password = userInformation.Password;
                _context.LoginInfo.Add(currentLogin);
                _context.SaveChanges();
                UserInfo uInfo = new UserInfo();
                uInfo.RegistrationID = currentLogin.Id;
                uInfo.DateOfBirth = userInformation.DateOfBirth;
                _context.UsersInfo.Add(uInfo);
                _context.SaveChanges();
                return Ok();
            }
            else
            {
                return NotFound();
            }
        }


        // PUT: api/Register/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
