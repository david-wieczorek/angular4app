import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
   selector: 'app-user',
   templateUrl: './user.component.html',
   styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
   name:string;
   age:number;
   email:string;
   address: Address;
   hobbies:string[];
   posts:Posts;

   constructor(private dataService:DataService) {
      console.log('Constructor ran');
   }

   ngOnInit() {
      console.log('NgOnInit ran');
      this.name = 'David Wieczorek';
      this.age = 37;
      this.email = 'blackratio@gmail.com';
      this.address = {
         number: 7,
         street: 'avenue du maréchal de Lattre de Tassigny',
         postalcode: 78360,
         city: 'Montesson',
         country: 'France'
      }
      this.hobbies = ['hockey', 'music'];

      this.dataService.getPosts().subscribe((posts) => {
         this.posts = posts;
      });
   }

   onclick() {
      //this.hobbies.push('toto');
   }

   addHobby(hobby) {
      this.hobbies.unshift(hobby);
      return false;
   }
   editUser(entry) {
      this.name = entry.name;
   }

   deleteHobby(hobby) {
      for(let i = 0; i < this.hobbies.length; i++) {
         if(this.hobbies[i] == hobby) {
            this.hobbies.splice(i, 1);
         }
      }
   }

}

interface Address {
   number:number,
   street:string,
   postalcode:number,
   city:string,
   country:string
}

interface Posts {
   id:number,
   title:string,
   body:string,
   userId:number
}
