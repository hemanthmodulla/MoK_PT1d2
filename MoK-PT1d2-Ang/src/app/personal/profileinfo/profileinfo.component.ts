import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styles: [
  ]
})
export class ProfileinfoComponent implements OnInit {
countryList = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor L\'Este', 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];
allGenders = ['Male', 'Female', 'Gay', 'Lesbian', 'Bisexual', 'Trans-gender', 'Queer', 'Do not wish to declare', 'Other'];
LoggedInUserInfo: User;
isValid = true;
UserInfoNotPresent: User;
selectedCountry: string;
selectedGender: string;
constructor(private http: HttpClient, public userservice: UserService, private router: Router) { }



  ngOnInit(): void {
    console.log('yippit');
    this.userservice.GetDataForLoggedInUser().subscribe(res => {
      console.log(res);
      this.userservice.LoggedInUserInfo = res as User ;
      if (this.userservice.LoggedInUserInfo.Country != ''){
        this.selectedCountry = this.userservice.LoggedInUserInfo.Country;
  
      }
      if(this.userservice.LoggedInUserInfo.Gender != ''){
        this.selectedGender = this.userservice.LoggedInUserInfo.Gender;
      }
    });
    console.log(this.userservice.LoggedInUserInfo.Country);
   
  }
  validateForm() {
    this.isValid = true;
    // tslint:disable-next-line: max-line-length

    return this.isValid;
  }
  CancelChange(){
    location.reload();
    
  }

  onSubmit(form: NgForm) {
    this.userservice.LoggedInUserInfo.Country = this.selectedCountry;
    this.userservice.LoggedInUserInfo.Gender = this.selectedGender;
    console.log('yola pola');
    console.log(this.userservice.LoggedInUserInfo);
    if (this.validateForm()) {
      this.userservice.UpdateUserInformation().subscribe(res => {
        console.log(res);
        // tslint:disable-next-line: triple-equals
        if (res.status == 200){
          this.router.navigate(['/home']);

        }
      }, (err) => {
        alert('Unable to save the profile information, Try again...');
      });
    }


  }
}


