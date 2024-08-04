import type { AstroIntegrationLogger, RouteData } from "astro";
import type { ReactNode } from "react";

export interface IntegrationInput {
  options: DefaultIntegrationOptions;
  render: RenderFunction;
}

export type DefaultIntegrationOptions = Omit<Omit<SatoriOptions, "width">, "height"> & {
  width?: number;
  height?: number;
  verbose: boolean;
};

export type IntegrationOptions = DefaultIntegrationOptions & {
  width: number;
  height: number;
  verbose: boolean;
};

/** This is the page data passed in by Astro */
export interface Page {
  pathname: string;
}

/** The input Astro passes to the build done hook */
export interface AstroBuildDoneHookInput {
  logger: AstroIntegrationLogger;
  pages: {
    pathname: string;
  }[];
  dir: URL;
  routes: RouteData[];
  cacheManifest: boolean;
}

/** The input arguments to a `RenderFunction` */
export type RenderFunctionInput = {
  pathname: string;
  dir: URL;
  document: Document;
} & PageDetails;

/** A function that renders some page input to React */
export type RenderFunction = (input: RenderFunctionInput) => Promise<ReactNode>;

/** Basic information about a page */
export interface PageDetails {
  title: string;
  description?: string;
  url: string;
  type: string;
  image: string;
}

type NonEmptyArray<T> = [T, ...T[]];

/** Types copied from Satori */
export type SatoriWeight = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type SatoriFontStyle = "normal" | "italic";
export interface SatoriFontOptions {
  data: Buffer | ArrayBuffer;
  name: string;
  weight?: SatoriWeight;
  style?: SatoriFontStyle;
  lang?: string;
}
export interface SatoriOptions {
  width: number;
  height: number;
  fonts: NonEmptyArray<SatoriFontOptions>;
}
