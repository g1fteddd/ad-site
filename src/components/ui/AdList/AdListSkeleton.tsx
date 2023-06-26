import React from "react";
import ContentLoader from "react-content-loader";

const AdListSkeleton: React.FC = () => {
    return (
        <ContentLoader
            speed={2}
            width={750}
            height={250}
            viewBox="0 0 750 250"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="20" ry="20" width="350" height="250" />
            <rect x="390" y="40" rx="0" ry="0" width="260" height="30" />
            <rect x="390" y="85" rx="0" ry="0" width="150" height="30" />
            <rect x="390" y="140" rx="0" ry="0" width="260" height="26" />
            <rect x="390" y="180" rx="0" ry="0" width="180" height="22" />
        </ContentLoader>
    );
};

export default AdListSkeleton;
