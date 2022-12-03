interface Data {
    length: number
}

function generateKey(data: Data): number {
    if(!data.length) return Math.floor(Math.random() * 10);
    return Math.floor(Math.random() * data.length);
}

export default generateKey;