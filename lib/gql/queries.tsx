'use client';

import {gql} from '@apollo/client'

export const GET_ALL_SPONSORS = gql`
query getLiberaSponsorsList($Level: String!, $Title: String!) {
    sponsors(filters: { sponsor_packages: { Level: { contains: $Level }, event: { Title: { contains: $Title }}}}) {
      data {
        id
        attributes {
          URL
          Logo {
            data {
              id
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
  `; 

export const GET_ALL_ADS = gql`
query getLiberaAds($isActive: Boolean, $Name: String!) {
  ads(filters: { isActive: { eq: $isActive }, apps: { Name: {eq: $Name}}}) {
    data{
      id
      attributes {
        Name
        URL
        Asset {
          data {
            id
            attributes {
              alternativeText
              width
              height
              url
            }
          }
        }
      }
    }
  }
}
`;

export const GET_ALL_POSTS = gql`
query AllPosts($PublicationState: PublicationState, $Name: String! ){
  posts(filters: { app: { Name: { eq: $Name }}},publicationState: $PublicationState, sort: "id:DESC"){
    data {
      id
      attributes {
        Title
        coverImage {
          data {
            id
            attributes {
              alternativeText
              width
              height
              url
            }
          }
        }
        Date
        slug
        Body
        Excerpt
      }
    }
  }
}`
;

export const GET_MY_POST = gql`
query MyPostBySlug($slug: String!) {
  posts(filters: { slug: { eq: $slug }}) {
    data {
      id
      attributes {
        Title
        coverImage {
          data {
            id
            attributes {
              alternativeText
              width
              height
              url
            }
          }
        }
        Excerpt
        slug
        Body
      }
    }
  }
}`
;

export const GET_POST_AND_MOREPOSTS = gql`
fragment PostFields on Post {
  Title
  Excerpt
  slug
  Date
  coverImage {
    data {
      id
      attributes {
        name
        alternativeText
        caption
        width
        height
        url
        previewUrl
      }
    }
  }
  news_categories {
    data {
      id
      attributes {
        Name
      }
    }
  }
  tags {
    data {
      id
      attributes {
        Name
      }
    }
  }
}
query PostBySlug($slug: String!) {
  posts(filters: { slug: { eq: $slug }}) {
    data {
      id
      attributes {
        ...PostFields
        Body
      }
    }
  }
}
`;

export const GET_RECENT_NEWS = gql`
query RecentNews ($PublicationState: PublicationState){
  posts(pagination: { start: 0, limit: 3}, sort: "id:desc", publicationState: $PublicationState) {
    data {
      id
      attributes {
        Title
        Excerpt
        slug
      }
    }
  }
}
`;

export const GET_INFO_BUTTON = gql`
query getInfoButton($PublicationState: PublicationState, $Name: String! ) {
    infoButtons(filters: { apps: { Name: { eq: $Name }}},publicationState: $PublicationState) {
      data {
        id
        attributes {
          Info
        }
      }
    }
  }
  `;

export const GET_ALL_FAQ = gql`
query getLiberaFAQs($PublicationState: PublicationState, $Name: String!, $Category: String!) {
    faqItems(filters: { apps: { Name: { eq: $Name }}, Category: { eq: $Category}},publicationState: $PublicationState, pagination: { page: 1, pageSize: 50 }) {
      data {
        id
        attributes {
          Question
          Answer
        }
      }
    }
  }
  `; 

export const GET_ANNOUNCEMENTS = gql`
query getAnnouncements($PublicationState: PublicationState, $Name: String!) {
    announcements(filters: { apps: { Name: { eq: $Name }}}, publicationState: $PublicationState, pagination: { page: 1, pageSize: 50 }) {
      data {
        id
        attributes {
          text
        }
      }
    }
  }
  `; 