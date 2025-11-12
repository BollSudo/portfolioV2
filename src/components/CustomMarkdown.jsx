import React from 'react'
import ReactMarkdown from "react-markdown";

const CustomMarkdown = ({markdownContent}) => {
    return (
        <ReactMarkdown
            components={{
                p: ({ ...props}) => <p className="text-white" {...props} />,
                strong: ({ ...props}) => <strong className="text-secondary font-bold" {...props} />,
                em: ({ ...props}) => <em className="text-white/70 italic" {...props} />,
                a: ({...props}) => <a className="text-white underline" {...props} />
            }}
        >
            {markdownContent}
        </ReactMarkdown>
    )
}
export default CustomMarkdown
