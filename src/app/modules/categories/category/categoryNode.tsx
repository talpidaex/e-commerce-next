'use client';
import react, { useState } from "react";

export default function CategoryNode({ node }: { node: any }) {


    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="tree-node">
            <div onClick={handleToggle} className={`node-toggle ${isExpanded ? 'expanded' : ''}`}>
                {isExpanded && node.children.length > 0} {node.title}
            </div>
            {isExpanded && (
                <ul className="child-nodes">
                    {node.children.map(childNode => (
                        <li key={childNode.id}>
                            <CategoryNode node={childNode} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}