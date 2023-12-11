import { Categories } from "./categories.define";
import CategoryNode from "./category/categoryNode";

export default function Categories() {

    const categories = [
        {
            title: 'Parent-1',
            href: '/parent-1',
            children: [
                {
                    title: 'Children-1-1',
                    href: '/children-parent-1-2',
                    children: [
                        {
                            title: 'Children-1-1-1',
                            href: '/children-parent-1-1-1',
                            children: [
                                {
                                    title: 'Children-1-1-1-1',
                                    href: '/children-parent-1-1-1-1',
                                    children: []
                                },
                                {
                                    title: 'Children-1-1-1-2',
                                    href: '/children-parent-1-1-1-2',
                                    children: []
                                }
                            ]
                        }
                    ]
                },
                {
                    title: 'Children-1-2',
                    href: '/children-parent-1-2',
                    children: []
                }
            ]
        },
        {
            title: 'Parent-2',
            href: '/parent-2',
            children: []
        }
    ]


    return (
        <div>
            {categories.map(category => (
                <CategoryNode key={category.title} node={category} />
            ))}
        </div>
    );
};

