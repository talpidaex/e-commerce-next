import { Category } from "./categories.define";
import CategoryNode from "./category/categoryNode";

export default function Categories({ categories }: { categories: Category[] }) {

    return (
        <div>
            {categories.map((category: Category) => (
                <CategoryNode key={category.title} node={category} />
            ))}
        </div>
    );
};

