const gQuery = {
  query: `
  {
    viewer {
      name
    }
    search(query: "user:mwasifu sort:updated-desc", type: REPOSITORY, first: 20) {
      nodes {
        ... on Repository {
          name
          description
          url
          id
          viewerSubscription
          licenseInfo{
              spdxId
          }
        }
      }
    }
  }
    `,
};

export default gQuery;
