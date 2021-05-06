import React from "react"

const GlobalFooter = () => {
    return (
        <div className="text-center text-muted small p-3">
            <a href="https://github.com/kurtobando/" className="text-muted" target="_blank" rel="noreferrer">
                Simple Chat - Github Repository
            </a>
            {` | `}
            <a href="https://kurtobando.com/" className="text-muted" target="_blank" rel="noreferrer">
                Kurt Obando
            </a>
        </div>
    )
}

export default GlobalFooter
