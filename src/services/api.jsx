export const apiKey = 'Xt4D6lMWKyFObOxW4PkhlJbubXxvG7kH90CC4nsd6Cgfj8SBgtQDgpjB';
export const apiUrl = 'https://api.pexels.com/v1/search?query=';

export async function fetchImages(query = 'gucci') {
    try {
        const response = await fetch(`${apiUrl}${query}`, {
            headers: {
                Authorization: apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const json = await response.json();
        const picHolder = [];
        json.photos.forEach((pic) => {
            picHolder.push(pic.src.medium);
        });
        return picHolder;
    } catch (error) {
        console.error('Error fetching data:', error.message);
        return [];
    }
}