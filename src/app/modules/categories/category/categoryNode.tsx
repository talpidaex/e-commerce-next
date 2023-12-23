'use client';
import { useEffect, useRef, useState } from "react";
import { ChevronRight } from "@styled-icons/bootstrap/ChevronRight";
import './categoryNode.scss';
import Link from "next/link";
export default function CategoryNode({ node }: { node: any }) {

    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [parentWidth, setParentWidth] = useState<number>(0);
    const observedParentDiv = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
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


    useEffect(() => {

        const handleClickOutside = (e: MouseEvent) => {
            if (childRef.current && !childRef.current.contains(e.target as Node)) {
                setIsExpanded(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)

        }
    }, [childRef])

    const handleToggle = (e: any) => {
        setIsExpanded(!isExpanded);
    };


    return (
        <div className="tree-node" ref={observedParentDiv}>
            <div id={node.key} onClick={handleToggle} >
                <div className="node-title-container">
                    <Link href={node.href}>{node.title}</Link>
                    {node.children.length > 0 && <ChevronRight width={10} height={10} />}
                </div>
            </div>
            {
                node.children.length > 0 && isExpanded &&
                <div className="child-nodes" style={{ left: parentWidth }} ref={childRef}>
                    {node.children.map((childNode: any, index: number) => (
                        <div key={index}>
                            <CategoryNode key={index} node={childNode} />
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}