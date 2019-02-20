import React from "react"
import PropTypes from "prop-types"
import SM from "./images/segrave-barns-dunany.jpg";

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>The Barn Wedding | Fionnuala & Conor | 22nd June 2019</title>
          
          <meta property="og:title" content="The Barn Wedding | Fionnuala & Conor | 22nd June 2019" />
          <meta property="og:description" content="Our wedding venue is Segrave Barn in Co. Louth, and while it is a little different, we hope you will love it as much as we do." />
          <meta property="og:url" content="https://thebarn.wedding" />
          <meta property="og:image" content={`https://thebarn.wedding/${SM}`} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="The Barn Wedding | Fionnuala & Conor | 22nd June 2019" />
          <meta name="twitter:description" content="Our wedding venue is Segrave Barn in Co. Louth, and while it is a little different, we hope you will love it as much as we do." />
          <meta name="twitter:url" content="https://thebarn.wedding" />
          <meta name="twitter:image" content={`https://thebarn.wedding/${SM}`} />

          <link href="https://fonts.googleapis.com/css?family=Playfair+Display+SC|Raleway:300,300i,400,600" rel="stylesheet" />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
