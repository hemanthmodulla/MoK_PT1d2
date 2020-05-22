using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MoK_PT1d2_API.Models
{
    [Table("Login")]
    public class Login
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string UserName { get; set; }
        [PasswordPropertyText(true)]
        [Required]
        public string Password { get; set; }
    }
}
