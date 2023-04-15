import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICardHomePage } from '../interfaces/ICardHomePage';

interface Tag {
  title: string;
}

interface Photo {
  id: string;
  urls: {
    regular: string;
  };
  description: string | null;
  likes: number;
  user: {
    name: string;
    username: string;
    profile_image: {
      medium: string;
    };
    location: string;
  };
  created_at: string;
  alt_description: string;
  title: string;
  tags: Tag[];
}

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com/',
    prepareHeaders(headers) {
      headers.set('Authorization', `Client-ID uLosFX2RUD_wEqam8JMPJyPpNm-9kvFq_gH2o5QY0o0`);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      searchPhotos: builder.query<ICardHomePage[], string>({
        query(searchTerm) {
          return `search/photos?page=1&query=${searchTerm}&per_page=6`;
        },
        transformResponse(response: { results: Photo[] }) {
          return response.results.map((photo: Photo) => ({
            id: photo.id,
            url: photo.urls.regular,
            title: photo.user.location || 'No location',
            likes: photo.likes,
            author: photo.user.name,
            date: new Date(photo.created_at).toLocaleDateString(),
            tags: photo.tags.map((tag: Tag) => tag.title),
          }));
        },
      }),
      searchPhotoById: builder.query<string, string>({
        query(photoId) {
          return `photos/${photoId}`;
        },
        transformResponse(response: Photo) {
          const description = response.description || response.alt_description || 'No description';
          return description;
        },
      }),
    };
  },
});

export const { useLazySearchPhotoByIdQuery, useSearchPhotosQuery } = unsplashApi;
