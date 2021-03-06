﻿using System;
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
    public class WidgetController : ControllerBase
    {
        private readonly PT1Context _context;

        public WidgetController(PT1Context context)
        {
            _context = context;
        }

        // GET: api/Widget
        public ActionResult Get(string id)
        
        {
            var query = (from wt in _context.WidgetTable
                         where wt.UserID == id
                         select new WidgetToList
                         {
                             id = wt.WidgetID,
                             name = wt.name,
                             componentName = wt.componentName,
                             componentType = "",
                             rows = wt.rows,
                             cols = wt.cols,
                             x = wt.x,
                             y = wt.y,
                             model = wt.model
                         });


            return Ok(query.ToList());
        }

        // GET: api/Widget/5
        //[HttpGet("{id}", Name = "Get")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        // POST: api/Widget
        [HttpPost]
        public void Post([FromBody] List<WidgetToList> value)
        {

            var widgetTableItems = from v in value
                                   select new WidgetTable
                                   {
                                       UserID = "123",
                                       WidgetID = v.id,
                                       name = v.name,
                                       componentName = v.componentName,
                                       rows = v.rows,
                                       cols = v.cols,
                                       x = v.x,
                                       y = v.y,
                                       model = v.model

                                   };
            string uID = widgetTableItems.First().UserID;
            _context.WidgetTable.RemoveRange(_context.WidgetTable.Where(x => x.UserID == uID));

            _context.WidgetTable.AddRange(widgetTableItems);
            _context.SaveChanges();

            //public ActionResult Post([FromBody] RegisterClass userInformation)
        }

        //[HttpPost]
        //public void Post([FromBody] string uID, string wID, string modInfo)
        //{


        //}



        //PUT: api/Widget/5
        //[HttpPut]
        //public void Put(ModelInfo modelInfo)
        //{
        //}



        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
