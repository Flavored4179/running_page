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

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: "Darren's Running Page",
  siteUrl: 'https://run.wdoc.top',
  logo: 'https://img.wdoc.top/2024/07/538277eea7de7a50befc66e45bbaffca.jpeg',
  description: '小米手环7Pro记录跑步',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'About',
      url: 'https://blog.wdoc.top',
    },
  ],
};

export default data;
