import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  // myForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit() {
    // this.myForm = this.fb.group ({
    //   staffName: '',
    //   phoneNumber: '',
    //   email: '',
    //   streetName: '',
    //   blkNumber: '',
    //   postalCode: '',
    //   country: '',
    //   dateOfBirth: '',
    //   ccNum: '',
    //   ccName: '',
    //   ccExpirationDate: '',
    //   duties: '',
    //   salary: '',
    //   password: '',
    //   role: ''
    //   });
  }

  // onSubmit() {
  //   this.authService.regUser(this.myForm.value.name, this.myForm.value.password, this.myForm.value.role).subscribe();
  //   alert("User Created")
  //   }
}
