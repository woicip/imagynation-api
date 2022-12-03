interface Image {
    name: string,
    url: string
}

const urls: Array<Image> = [
    {
        name: "Beach 1",
        url: "https://cdn.sandals.com/beaches/v12/images/general/destinations/home/beach.jpg"
    },
    {
        name: "Beach 2",
        url: "https://www.vistaresidences.com.ph/assets/best-beaches-in-the-philippines_condo-living.png"
    },
    {
        name: "Beach 3",
        url: "https://dreammeaning.online/wp-content/uploads/2015/09/2e83d7bc595a142d5b8cc7504455fc0e.jpg"
    },
    {
        name: "Beach 4",
        url: "http://7-themes.com/data_images/out/65/6994334-dream-beach.jpg"
    },
    {
        name: "Beach 5",
        url: "https://wallpapers.net/web/wallpapers/beautiful-dream-beach/thumbnail/lg.jpg"
    },
    {
        name: "Beach 6",
        url: "https://megaport.hu/media/king-include/uploads/2022/06/770928-dominika-dominica-beach.jpg"
    }
]

export function getBeaches(): Image[] {
    return urls;
}

export function getBeach(): Image {
    const index: number = Math.floor(Math.random() * urls.length);
    return urls[index];
}