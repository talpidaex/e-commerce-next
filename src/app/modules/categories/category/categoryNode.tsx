'use client';
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { ChevronRight } from "@styled-icons/bootstrap/ChevronRight";
import './categoryNode.scss';
export default function CategoryNode({ node }: { node: any }) {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [parentWidth, setParentWidth] = useState<number>(0);
    const observedParentDiv = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (!observedParentDiv.current) return;

        const resizeObserver = new ResizeObserver(() => {
            if (observedParentDiv.current && observedParentDiv.current.offsetWidth !== parentWidth) {
                setParentWidth(observedParentDiv.current.offsetWidth);
            }
        })

        resizeObserver.observe(observedParentDiv.current);
        return () => {
            resizeObserver.disconnect();
        }

    }, [parentWidth])

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };


    return (
        <div className="tree-node" ref={observedParentDiv} tabIndex={0}>
            <div id={node.key} onClick={handleToggle}>
                <div className="node-title-container">
                    <span>{node.title}</span>
                    {node.children.length > 0 && <ChevronRight width={10} height={10} />}
                </div>
            </div>
            {
                node.children.length > 0 && isExpanded &&
                <div className="child-nodes" style={{ left: parentWidth }} onBlur={() => setIsExpanded(false)}>
                    {node.children.map((childNode: any) => (
                        <div key={childNode.key}>
                            <CategoryNode key={childNode.key} node={childNode} />
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}