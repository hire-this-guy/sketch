import { DocumentResponseIdentifier } from "../../types/response";
import { getMockResponse } from "../../mocks/documentResponse.mock";
import React from "react";
import ArtboardView from "./ArtboardView";
import { MemoryRouter, Route } from "react-router-dom";
import { render, RenderResult, screen, waitFor } from "@testing-library/react";
import { testIds } from "./testids";

describe("Artboard View", () => {
    const response: DocumentResponseIdentifier = getMockResponse();
    const getDocumentId = () => response.identifier;
    let currentArtboardIndex = 0;
    const getCurrentArtboard = () =>
        response.version.document.artboards.entries[currentArtboardIndex];

    let rendered: RenderResult;

    const setup = (index = currentArtboardIndex) => {
        currentArtboardIndex = index;
        rendered?.unmount();
        rendered = render(RenderWithRouter());
    };
    const RenderWithRouter = () => {
        return (
            <MemoryRouter
                initialEntries={[
                    `/${getDocumentId()}/${getCurrentArtboard().name}`,
                ]}
            >
                <Route path="/:docId/:artboardName">
                    <ArtboardView data={response} />
                </Route>
            </MemoryRouter>
        );
    };

    beforeEach(() => {
        setup();
    });

    afterAll(() => {
        rendered.unmount();
    });

    it("should display total number of artboards", () => {
        expect(screen.getByTestId("allArtboardsNumber")).toHaveTextContent(
            `${response.version.document.artboards.entries.length}`
        );
    });

    it("should display current's artboard number", () => {
        expect(
            screen.getByTestId(testIds.currentArtboardNumber)
        ).toHaveTextContent("1");
    });

    it("should display current's artboard name", () => {
        expect(
            screen.getByTestId(testIds.currentArtboardName)
        ).toHaveTextContent(getCurrentArtboard().name);
    });

    it("should display current's artboard image", () => {
        expect(screen.getByTestId(testIds.currentImage)).toHaveAttribute(
            "srcset",
            `${getCurrentArtboard().files[0].url} 1x, ${
                getCurrentArtboard().files[1].url
            } 2x`
        );
    });

    it("should link to previous artboard when current one is not the first one", async () => {
        setup(1);
        const prevArtboardName =
            response.version.document.artboards.entries[
                currentArtboardIndex - 1
            ].name;
        expect(screen.getByTestId(testIds.prevArtboardLink)).not.toBeNull();
        expect(screen.queryByTestId(testIds.prevArtboardLink)).toHaveAttribute(
            "href",
            `/${getDocumentId()}/${prevArtboardName}`
        );
    });

    it("should not link to previous artboard when current one is the first one", () => {
        setup(0);
        expect(screen.queryByTestId(testIds.prevArtboardLink)).toBeNull();
    });

    it("should link to next artboard when current one is not the last one", () => {
        setup(0);
        const nextArtboardName =
            response.version.document.artboards.entries[
                currentArtboardIndex + 1
            ].name;
        expect(screen.queryByTestId(testIds.nextArtboardLink)).not.toBeNull();
        expect(screen.queryByTestId(testIds.nextArtboardLink)).toHaveAttribute(
            "href",
            `/${getDocumentId()}/${nextArtboardName}`
        );
    });

    it("should not link to next artboard when current one is the last one", () => {
        setup(response.version.document.artboards.entries.length - 1);
        expect(screen.queryByTestId(testIds.nextArtboardLink)).toBeNull();
    });

    it("should render link to document view", () => {
        expect(screen.getByTestId(testIds.closeLink)).toHaveAttribute(
            "href",
            `/${getDocumentId()}`
        );
    });
});
