import CategoryNode from "./category/categoryNode";

export default function Categories({ categories }: { categories: any }) {

    return (
        <>
            {categories.map((category: any) => (
                <CategoryNode key={category.title} node={category} />
            ))}
        </>
    );
};

