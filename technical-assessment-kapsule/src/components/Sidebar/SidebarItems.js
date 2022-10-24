const SidebarItems = [
    {
      path: "/dashboard",
      icon: "ri-apps-2-line",
      display: "Dashboard",
    },
    {
      path: "/Elements",
      icon: "ri-macbook-line",
      display: "Elements",
      children : [
        {
          path: "/Elements/Elements1",
          icon: "ri-macbook-line",
          display: "Elements 1",
        },
        {
          path: "/Elements/Elements2",
          icon: "ri-macbook-line",
          display: "Elements 2",
        }
      ]
    },
    {
      path: "/Tables",
      icon: "ri-table-2",
      display: "Tables",
      children: [
        {
          path: "/Tables/Tables1",
          icon: "ri-table-2",
          display: "Tables 1",
        },
        {
          path: "/Tables/Tables2",
          icon: "ri-table-2",
          display: "Tables 2",
        },
        {
          path: "/Tables/Tables3",
          icon: "ri-table-2",
          display: "Tables 3",
        },
        {
          path: "/Tables/Tables4",
          icon: "ri-table-2",
          display: "Tables 4",
        }
      ]
    },
    
    {
      path: "/Analytics",
      icon: "ri-store-line",
      display: "Analytics",
    },
    {
      path: "/Settings",
      icon: "ri-settings-2-line",
      display: "Settings",
    },
  ];
  
  export default SidebarItems;