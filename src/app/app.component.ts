import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'In a car',
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Making a payment',
      url: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1eSUyMGElMjAlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Watching a movie',
      url: 'https://images.unsplash.com/photo-1548095115-45697e222a58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sleeping at last',
      url: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNsZWVwaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'In a car',
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Making a payment',
      url: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1eSUyMGElMjAlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Watching a movie',
      url: 'https://images.unsplash.com/photo-1548095115-45697e222a58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sleeping at last',
      url: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNsZWVwaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'In a car',
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Making a payment',
      url: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1eSUyMGElMjAlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Watching a movie',
      url: 'https://images.unsplash.com/photo-1548095115-45697e222a58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sleeping at last',
      url: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNsZWVwaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'In a car',
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Making a payment',
      url: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1eSUyMGElMjAlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Watching a movie',
      url: 'https://images.unsplash.com/photo-1548095115-45697e222a58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sleeping at last',
      url: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNsZWVwaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'In a car',
      url: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Making a payment',
      url: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1eSUyMGElMjAlMjBwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Watching a movie',
      url: 'https://images.unsplash.com/photo-1548095115-45697e222a58?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      title: 'Sleeping at last',
      url: 'https://images.unsplash.com/photo-1544126592-807ade215a0b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHNsZWVwaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
  ];
  setCurrentPage(value: number) {
    this.currentPage = value;
  }

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }
}
