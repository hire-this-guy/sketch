export interface Thumbnail {
    height: number;
    url: string;
    width: number;
}

export interface File {
    height: number;
    scale: number;
    thumbnails: Thumbnail[];
    url: string;
    width: number;
}

export interface Entry {
    files: File[];
    isArtboard: boolean;
    name: string;
}

export interface DocumentResponse {
    shortId: string;
    version: {
        document: {
            artboards: {
                entries: Entry[];
            };
            name: string;
        };
    };
}
