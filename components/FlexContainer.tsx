import styled from "styled-components";

export type FlexContainerProps = {
    alignItems?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline" | undefined;
    alignContent?:
        | "normal"
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | "stretch"
        | undefined;
    centered?: boolean | undefined;
    flexDirection?: "column" | "row" | undefined;
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | undefined;
    gap?: string | undefined;
    justifyContent?:
        | "flex-start"
        | "flex-end"
        | "center"
        | "space-between"
        | "space-around"
        | "space-evenly"
        | undefined;
};

export const FlexContainer = styled.div<FlexContainerProps>`
    align-items: ${(props) => (props.centered ? "center" : props.alignItems)};
    display: flex;
    justify-content: ${(props) => (props.centered ? "center" : props.justifyContent)};
    ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection};`}
    ${(props) => props.flexWrap && `flex-wrap: ${props.flexWrap};`}
    ${(props) => props.gap && `gap: ${props.gap};`}
`;

FlexContainer.defaultProps = {
    alignItems: "flex-start",
    alignContent: "normal",
    centered: false,
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: undefined,
    justifyContent: "flex-start",
};
