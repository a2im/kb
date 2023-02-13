const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';

export async function Get2021Playlist (){
    const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PL62SJLnyvK_igjmzcMUIFgVh2sKqWeK7g&key=${process.env.YOUTUBE_API_KEY}`, { next: { revalidate: 60 } })
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
export async function Get2022Playlist (){
  const res = await fetch(`${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&maxResults=50&playlistId=PL62SJLnyvK_iaUGE9jwQgSRcdClJeYI2a&key=${process.env.YOUTUBE_API_KEY}`, { next: { revalidate: 60 } })
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  return res.json();
} 