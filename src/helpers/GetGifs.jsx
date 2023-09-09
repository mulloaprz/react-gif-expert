export const getGifs = async(category) =>
{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=VKDOdcARKsIKgPRp0N8ui3LiXVo8EBOk&q=${category}&limit=20&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
    const resp = await fetch(url);
    const { data = [] } = await resp.json()

    return data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.original.url,
    }));
}