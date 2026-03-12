import questions from './data/questions-culture-generale.json'
import { useState } from "react"


// QUIZ EN REACT JS 

// 1 - On doit lors de chaque tour pouvoir choisir une réponse parmi celles proposées 
// 2 - Une fois la réponse choisie on passe à la question suivante après avoir affiché la correction
// 3 - On ne veut faire que 5 tours donc après la 5eme question on affiche que le jeu est terminé et on propose de recommencer
// 4 - On doit aussi gérer le score pour chaque tour

// Concepts à utiliser : 
// useState pour les états 
// Le rendu conditionnel (opérateur ternaire etc)
// Gérer les événements avec onClick
// Utiliser la méthode .map si besoin de lister des éléments ...

// Indices 
// Un state pourra s'occuper de l'index de la question -> Une fois une réponse choisie on incrémente le state
// Un state pour le score sera aussi bienvenu ...
// Un if ... else peut etre utile pour vérifier si on a dépassé la eme question ou pas ...



function Quiz() {
    // Gestion des différents states / états liés au quiz 
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
   
    function handleClick(choice) {
        // Vérification de la réponse
        if (choice.correcte) {
            alert("Bonne réponse !")
            setScore(score + 1)
        } else {
            alert("Mauvaise réponse...")
        }

        setCurrentIndex(currentIndex + 1)
    }

    return ( 
        <>
            { currentIndex < 5 ? 
            
                <>
                    <h2>Question {currentIndex + 1}</h2>
                    <h3>Score : {score} / 5</h3>

                    <h1>{questions[currentIndex].intitule}</h1>

                    {questions[currentIndex].choix.map((choice, index) => (
                        <button key={index} onClick={() => handleClick(choice)}>{choice.texte}</button>
                    ))}
                </>

                :

                <>
                    <h2>Votre score est de {score} /5</h2>
                    <button onClick={() => setCurrentIndex(0)}>Recommencer</button>
                </>
    
            }
        </>
     )
}

export default Quiz