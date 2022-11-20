import CustomLayout from "./wrapPageElement"

// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
export const wrapPageElement = CustomLayout

// https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/#editing-html-and-body
export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({ lang: "en" })
}
