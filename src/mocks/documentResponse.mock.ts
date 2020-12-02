import {
    Artboard,
    DocumentResponseIdentifier,
    File,
    Thumbnail,
} from "../types/response";

const getRandomSting = (length = 6): string => {
    return Math.random().toString(16).substr(2, length);
};

export const getThumbnail = (): Thumbnail => {
    return {
        height: 100,
        url: `/${getRandomSting()}.jpg`,
        width: 100,
    };
};

export const getFiles = (scale: number): File => {
    return {
        height: 100,
        scale,
        thumbnails: [getThumbnail(), getThumbnail()],
        url: `/${getRandomSting()}.jpg`,
        width: 100,
    };
};

export const getArtboard = (): Artboard => {
    return {
        files: [getFiles(1), getFiles(2)],
        isArtboard: true,
        name: getRandomSting(),
    };
};

export const getMockResponse = (): DocumentResponseIdentifier => {
    return {
        identifier: "super",
        version: {
            document: {
                artboards: {
                    entries: [getArtboard(), getArtboard(), getArtboard()],
                },
                name: "super document",
            },
        },
    };
};
