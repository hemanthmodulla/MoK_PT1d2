using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace MoK_PT1d2_API.Models
{
    public class WidgetTable
    {
        [Key]
        public Guid WidgetTableID { get; set; }
        public string UserID { get; set; }
        public string WidgetID { get; set; }
        public string name { get; set; }
        public string componentName { get; set; }
        public int cols { get; set; }
        public int rows { get; set; }
        public int y { get; set; }
        public int x { get; set; }
        public string model { get; set; }
    }
}
