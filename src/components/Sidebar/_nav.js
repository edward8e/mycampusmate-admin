export default {
  items: [
    {
      name: "Home",
      url: "/dashboard",
      icon: "icon-home",
    },
    {
      name: 'Clubs',
      url: '/clubs',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'SHPE',
          url: '/clubs',
          icon: 'icon-puzzle'
        },
        {
          name: 'IEEE',
          url: '/clubs',
          icon: 'icon-puzzle'
        }
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
