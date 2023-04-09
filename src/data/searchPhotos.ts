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

export async function searchPhotos(searchTerm: string): Promise<ICardHomePage[]> {
  const apiKey = 'uLosFX2RUD_wEqam8JMPJyPpNm-9kvFq_gH2o5QY0o0';
  const apiUrl = `https://api.unsplash.com/search/photos?page=1&query=${searchTerm}&per_page=6&client_id=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.errors[0]);
  }

  const photos = data.results.map((photo: Photo) => ({
    id: photo.id,
    url: photo.urls.regular,
    title: photo.user.location || 'No location',
    likes: photo.likes,
    author: photo.user.name,
    date: new Date(photo.created_at).toLocaleDateString(),
    tags: photo.tags.map((tag: Tag) => tag.title),
  }));

  return photos;
}
