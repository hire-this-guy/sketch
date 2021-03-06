import { gql, GraphQLClient } from "graphql-request";
import { config } from "./config";
import { DocumentResponse } from "../types/response";

const client = new GraphQLClient(config.endpoint, { headers: {} });

const getQuery = (id: string): string => {
    return gql`{
      share(id: "${id}") {
        identifier
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
};

export const getDocument = async (docId: string): Promise<DocumentResponse> => {
    if (typeof docId === "undefined") {
        throw new Error("getDocument called without id");
    }
    const response = await client.request<{ share: DocumentResponse }>(
        getQuery(docId)
    );
    return response.share;
};
