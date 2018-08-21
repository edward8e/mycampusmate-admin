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
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'IEEE',
          url: '/base/cards',
          icon: 'icon-puzzle'
        }
      ]
    },{
      name: "Contact Us",
      url: "/contact",
      icon: "icon-speedometer",
      badge: {
        variant: "info",
        text: "NEW"
      }
    },
  ]
};
