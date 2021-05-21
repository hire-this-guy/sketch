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

export interface Artboard {
    files: File[];
    isArtboard: boolean;
    name: string;
}

export type DocumentResponse = {
    identifier: string;
    version: {
        document: {
            artboards: {
                entries: Artboard[];
            };
            name: string;
        };
    };
};
