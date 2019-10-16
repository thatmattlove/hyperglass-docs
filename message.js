import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import renderRoutes from '@docusaurus/renderRoutes';
import MDXComponents from '@theme/MDXComponents';
import Admonition from 'react-admonitions';

function Content(content) {
    return <div>{content}</div>;
}

function Message(props) {
    const { route, docsMetadata, location } = props;
    return (
        //<Admonition type={props.type} title={props.title}>
        <MDXProvider components={MDXComponents}>
            {props.children}
        </MDXProvider>
        //</Admonition>
    )
}
export default Message