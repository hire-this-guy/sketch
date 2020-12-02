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

type DocumnetResponseCommon = {
    version: {
        document: {
            artboards: {
                entries: Artboard[];
            };
            name: string;
        };
    };
};
export type DocumentResponseIdentifier = DocumnetResponseCommon & {
    identifier: string;
};
export type DocumentResponseShortId = DocumnetResponseCommon & {
    shortId: string;
};

export type DocumentResponse =
    | DocumentResponseShortId
    | DocumentResponseIdentifier;
