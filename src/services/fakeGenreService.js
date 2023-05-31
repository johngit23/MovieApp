export const genres = [
    {_id: "5b21ca3eeb7f6fbccd4711818", name: "Action"},
    {_id: "5b21ca3eeb7f6fbccd4711814", name: "Comedy"},
    {_id: "5b21ca3eeb7f6fbccd4711820", name: "Thriller"},
];

export function getGenres() {
    return genres.filter (g => g);
}