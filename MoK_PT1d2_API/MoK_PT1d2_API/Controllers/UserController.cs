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
    public class UserController : ControllerBase
    {

        private readonly PT1Context _context;

        public UserController(PT1Context context)
        {
            _context = context;
        }
        // GET: api/User
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}

        [HttpGet("{regId}")]
        public ActionResult Get(string regId)
        {
            UserInfo userInfo = new UserInfo();
            userInfo = _context.UsersInfo.Where(x => x.RegistrationID.ToString().ToLower() == regId.ToLower()).FirstOrDefault();
            return Ok(userInfo);
        }

        [HttpPost]
        public ActionResult Post([FromBody] UserInfo userInformation)
        {
            _context.UsersInfo.Update(userInformation);
            _context.SaveChanges();
            return Ok();
        }

        // PUT: api/User/5
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
