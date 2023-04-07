export async function searchPhotoById(photoId?: string): Promise<string> {
  const apiKey = 'uLosFX2RUD_wEqam8JMPJyPpNm-9kvFq_gH2o5QY0o0';
  const apiUrl = `https://api.unsplash.com/photos/${photoId}?client_id=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();

  if (response.status !== 200) {
    throw new Error(data.errors[0]);
  }

  const photo = {
    description: data.description || data.alt_description || 'No description',
  };

  return photo.description;
}
