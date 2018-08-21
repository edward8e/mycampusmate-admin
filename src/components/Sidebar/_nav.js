export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW"
      }
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
    },{
      name: "Contact Us",
      url: "/contactus",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
  ]
};
