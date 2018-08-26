export default {
  items: [
    {
      name: "Home",
      url: "/home",
      icon: "fa fa-home",
    },
    {
      name: 'Clubs',
      url: '/clubs',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Add a club event',
          url: '/addclubs',
          icon: 'fa fa-plus-circle'
        },
        {
          name: 'Delete a club event',
          url: '/deleteclubs',
          icon: 'fa fa-minus-circle'
        },
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
