export default {
  items: [
    {
      name: "Home",
      url: "/dashboard",
      icon: "fa fa-home",
    },
    {
      name: 'Clubs',
      url: '/clubs',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'AddClubs',
          url: '/addclubs',
          icon: 'fa fa-plus-circle'
        },
        {
          name: 'DeleteClubs',
          url: '/deleteclubs',
          icon: 'fa fa-minus-circle'
        },
        {
          name: 'Edit a club event',
          url: '/editevent',
          icon: 'icon-puzzle'
        },
        {
          name: 'Edit a club',
          url: '/editclubinfo',
          icon: 'icon-puzzle'
        },
      ]
    },
    {
      name: 'Officers',
      url: '/officers',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Add an officer',
          url: '/addofficer',
          icon: 'fa fa-plus-circle'
        },
        {
          name: 'Delete an officer',
          url: '/deleteofficer',
          icon: 'fa fa-minus-circle'
        }
      ]
    },
    {
      divider: true,
    },
    {
      name: 'Contact Us',
      url: '/contactus',
      icon: 'fa fa-envelope',
      class: 'mt-auto',
      variant: 'success',
    }
  ]
};
