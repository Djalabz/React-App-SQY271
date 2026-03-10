// Dans ce composant vous allez lister les articles récupérées depuis articles.json
// Il y aura également un bouton qui lorsque l'on clique dessus cache les atrticles en question

// 1-Créer le composant dans le fichier adequat (bien penser à exporter)
// 2-Mettre à jour le routeur dans App pour qu'un lien blog nous ammène bien sur le composant du meme nom
// 3-Dans votre fichier blog : 
//  - Importer la liste des articles depuis le json (import du fichier et ne pas oublier de PARSE)
//  - maper dans cette liste et afficher les articles dans le JSX.
//  - Coder le state lié au bouton qui permet d'afficher ou cacher les articles 

import articles from "./data/articles.json"
import { useState } from "react"

function Blog() {
    const [showArticles, setShowArticles] = useState(true)


    return ( 
        <> 
            <button onClick={() => setShowArticles(!showArticles)}>{showArticles ? "Hide" : "Show"}</button> 

            {showArticles ? 
                articles.map((article, index) => (
                    <div key={index}>
                        <h2>{article.titre}</h2>
                        <h4>{article.date}</h4>
                        <h4>{article.auteur}</h4>
                        <p>{article.contenu}</p>
                    </div>
                ))
            : <h2>Les articles sont cachés !</h2> }
        </>
    )
}

export default Blog 