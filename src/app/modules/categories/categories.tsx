import CategoryNode from "./Category/CategoryNode";

export default function Categories({ categories }: { categories: any }) {

    return (
        <div>
            {categories.map((category: any) => (
                <CategoryNode key={category.title} node={category} />
            ))}
        </div>
    );
};

