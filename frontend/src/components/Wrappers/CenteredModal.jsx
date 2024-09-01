import React from "react";

export default function CenteredModal({ children }) {
    /**
     * CenteredModal component
     * 
     * This component creates a centered modal with a blue background.
     * It wraps its children in a flex container that centers content both vertically and horizontally.
     * 
     * @param {React.ReactNode} children - The content to be displayed inside the modal
     * @returns {React.ReactElement} A div containing the centered children
     */
    return <div className="flex items-center justify-center h-screen bg-blue-300">{children}</div>;
}