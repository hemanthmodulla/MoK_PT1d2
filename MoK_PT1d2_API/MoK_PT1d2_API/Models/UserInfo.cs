using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MoK_PT1d2_API.Models
{
    [Table("UserInfo")]
    public class UserInfo
    {
        [Key]
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Gender { get; set; }
        public string ConatactNumber { get; set; }
        public string EmailAddress { get; set; }
        public string Address { get; set; }
        public string Country { get; set; }

        public string Image { get; set; }
        public Guid RegistrationID { get; set; }
       

    }
}
