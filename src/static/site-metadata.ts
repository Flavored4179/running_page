interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: "Darren's Running Page",
  siteUrl: 'https://run.wdoc.top',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTtc69JxHNcmN1ETpMUX4dozAgAN6iPjWalQ&usqp=CAU',
  description: '小米手环7Pro记录跑步',
  navLinks: [
    {
      name: 'About',
      url: 'https://blog.wdoc.top',
    },
  ],
};

export default data;
