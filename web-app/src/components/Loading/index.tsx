import React, { ReactNode } from "react";

interface LoadingProps {
    comp: ReactNode;
    page: string;
}

const Loading: React.FC<LoadingProps> = ({ comp, page }) => {
    return (
        <React.Suspense
            fallback={
                <div className='container'>
                    <div className="loader"></div>
                    <div className="loading-text">{page} 正在加载...</div>
                </div>
            }
        >
            {comp}
        </React.Suspense>
    );
};

export default Loading;