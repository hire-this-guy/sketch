import { gql, GraphQLClient } from "graphql-request";
import { config } from "./config";
import { DocumentResponse } from "../types/response";

const client = new GraphQLClient(config.endpoint, { headers: {} });

const getQuery = (shortId: string): string => gql`{
  share(shortId: "${shortId}") {
    shortId
    version {
      document {
        name
        artboards {
          entries {
            name
            isArtboard
            files {
              url
              height
              width
              scale
              thumbnails {
                url
                height
                width
              }
            }
          }
        }
      }
    }
  }
}
`;

export const getDocument = async (
    shortId: string
): Promise<DocumentResponse> => {
    if (typeof shortId === "undefined") {
        throw new Error("getDocument called without id");
    }
    const response = await client.request<{ share: DocumentResponse }>(
        getQuery(shortId)
    );
    return response.share;
};
