const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

type Query
{
   TotalBlogPost: Int!
   GetAllPosts: [BlogPost!]!
}

type BlogPost {
    Id: ID!
    Title: String!
    ShortDescription: String!
    Description: String!,
    CreatedOn:String!
}
input CreateBlogPostInput{
    Id: ID!
    Title: String!
    Slug:String!
    ShortDescription: String!
    Description: String!
}

input UpdateBlogPostInput{
    Id: ID!
    Title: String!
    ShortDescription: String!
    Description: String!
}

type Mutation {
    CreateBlogPost(input:CreateBlogPostInput):BlogPost!
    UpdateBlogPost(input:UpdateBlogPostInput):BlogPost!
}


`;

const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
    mocks: true
});

apolloServer.listen({ port: 8083 }).then(({ url }) => {
    console.log(`server is running at ${JSON.stringify(url)}`);
})