import { useState, useEffect } from "react"

// Faire un call API dans le useEffect qui ne se déclenche que lors du chargement initial de la page 
// Stocker dans un state l'objet de la réponse et lister les produits recuperés

// Utiliser fetch et la fake store API -> 'https://fakestoreapi.com/products

function Shop() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
        .catch(err => console.log(err))
    }, [])

    return ( 
    <>
        {products.length > 0 ?

            products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} />
                    <h2>{product.title}</h2>
                    <h3>{product.description}</h3>
                    <h3>{product.price}</h3>
                    <button>Ajouter au panier</button>
                </div>
            ))

            :

            <h2>Aucun produit disponible pour le moment ...</h2>
        }
    </>
    );
}

export default Shop 


