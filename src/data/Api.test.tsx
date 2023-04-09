import { vi } from 'vitest';
import { searchPhotos } from './searchPhotos';
import { searchPhotoById } from './searchPhotoById';

describe('searchPhotos and searchPhotoById functions test, which calls to API', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  afterEach(() => {
    vi.resetAllMocks();
  });

  test('searchPhotos returns an array of cards', async () => {
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
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
      status: 200,
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetchPromise);

    const cards = await searchPhotos('nature');

    expect(Array.isArray(cards)).toBe(true);
    expect(cards[0]).toHaveProperty('id');
    expect(cards[0]).toHaveProperty('url');
    expect(cards[0]).toHaveProperty('title');
    expect(cards[0]).toHaveProperty('likes');
    expect(cards[0]).toHaveProperty('author');
    expect(cards[0]).toHaveProperty('date');
    expect(cards[0]).toHaveProperty('tags');
  });

  test('searchPhotoById returns photo description', async () => {
    const mockResponse = {
      status: 200,
      description: 'A beautiful photo',
      alt_description: 'An alternative description',
    };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
      status: 200,
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetchPromise);

    const description = await searchPhotoById('testId');

    expect(typeof description).toBe('string');
    expect(description).toBe(mockResponse.description);
  });

  test('searchPhotoById throws an error if API request fails', async () => {
    const mockResponse = {
      status: 404,
      errors: ['Photo not found'],
    };
    const mockJsonPromise = Promise.resolve(mockResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
      status: 404,
    });
    global.fetch = vi.fn().mockImplementation(() => mockFetchPromise);

    await expect(searchPhotoById('testId')).rejects.toThrow('Photo not found');
  });
});
