interface GoogleReview {
    author_name: string;
    rating: number;
    text: string;
    time: number;
    profile_photo_url?: string;
}

export async function fetchGoogleReviews(apiKey: string, placeId: string): Promise<GoogleReview[]> {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.result && data.result.reviews) {
            return data.result.reviews;
        }
        
        return [];
    } catch (error) {
        console.error('Error fetching Google reviews:', error);
        return [];
    }
}
