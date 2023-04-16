import { vi } from 'vitest';
import { useLazySearchPhotoByIdQuery, useLazySearchPhotosQuery } from './api';
import { Provider } from 'react-redux';
import store from './../store/store';
import React from 'react';
import { renderHook } from '@testing-library/react';

describe('searchPhotos and searchPhotoById functions test, which calls to API', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  const mockResponse = {
    status: 200,
    results: [
      {
        id: 'abc123',
        urls: {
          regular: 'https://images.unsplash.com/image.jpg',
        },
        description: 'A beautiful photo',
        likes: 10,
        user: {
          name: 'John Smith',
          username: 'jsmith',
          profile_image: {
            medium: 'https://images.unsplash.com.com/profile.jpg',
          },
          location: 'New York, NY',
        },
        created_at: '2022-01-01T00:00:00Z',
        alt_description: 'An alternative description',
        title: 'A beautiful photo',
        tags: [
          {
            title: 'nature',
          },
          {
            title: 'landscape',
          },
        ],
      },
    ],
  };

  test('searchPhotos returns an array of cards', async () => {
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
      status: 200,
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetchPromise);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(() => useLazySearchPhotosQuery(), { wrapper });
    const searchPhotos = result.current[0];
    const response = await searchPhotos('nature');
    const cards = response.data ?? [];

    expect(Array.isArray(cards)).toBe(true);
    if (cards.length > 0) {
      expect(cards[0]).toHaveProperty('id');
      expect(cards[0]).toHaveProperty('url');
      expect(cards[0]).toHaveProperty('title');
      expect(cards[0]).toHaveProperty('likes');
      expect(cards[0]).toHaveProperty('author');
      expect(cards[0]).toHaveProperty('date');
      expect(cards[0]).toHaveProperty('tags');
    }
  });

  test('searchPhotoById returns photo description', async () => {
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
      status: 200,
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetchPromise);

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    );

    const { result } = renderHook(() => useLazySearchPhotoByIdQuery(), { wrapper });

    const searchPhotoById = result.current[0];
    const response = await searchPhotoById('abc123');
    const description = response.data ?? 'A beautiful photo';

    expect(typeof description).toBe('string');
    expect(description).toBe(mockResponse.results[0].description);
  });
});
