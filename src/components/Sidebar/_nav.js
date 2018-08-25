export default {
  items: [
    {
      name: "Home",
      url: "/home",
      icon: "icon-home",
    },
    {
      name: 'Clubs',
      url: '/clubs',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Add a club event',
          url: '/addclubs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Delete a club event',
          url: '/deleteclubs',
          icon: 'icon-puzzle'
        },
      ]
    },
    {
      divider: true,
    },
    {
      name: 'Contact Us',
      url: '/contactus',
      icon: 'icon-speedometer',
      class: 'mt-auto',
      variant: 'success',
    }
  ]
};
