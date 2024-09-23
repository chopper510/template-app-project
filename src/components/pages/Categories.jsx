import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import LoadingRow from "../LoadingRow";
import Error from "../Error";

function Categories() {
    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
            try {
                setIsLoading(true);
                const response = await axios.get(`https://63c4a87b499082c2.mokky.dev/category`);
                setCategories(response.data);
            } catch (e) {
                setIsError (true);
                console.log(e);
            } finally {
                setIsLoading(false);
            }
        }
        fetchCategories();
    }, []);

    if (isError) {
        return <Error />;
    }

    return (
        <section className="mobile-block">
            <div className="mobile-block_header is-danger">
                Команды
            </div>
            {isLoading ? (
                <LoadingRow />
            ) : (
                <div className="container">
                    <div className="category-row">
                        {categories.map((category) => (
                            <Link to={`/team/category/${category.id}`} class="category-item" key={category.id}>
                                <img src={category.imageUrl} alt={category.name} className="category-item__img" />
                                <span className="category-item__title">{category.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
    
export default Categories;
