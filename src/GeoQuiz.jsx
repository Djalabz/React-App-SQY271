import { useState, useEffect } from "react"

// API pour les données GEO : https://restcountries.com/v3.1/all?fields=name, flags

// 1 - Afficher un drapeau aléatoire depuis l'API 
// 2 - Afficher en dessous 4 boutons représentant chacun un pays dont un seul est la bonne réponse
// 3 - Vérifier la réponse puis prendre en compte le score. On pourra faire 5 tours comme auparavnt 

// Autre possibilité : afficher un input sous le drapeau du pays et le user doit taper la bonne réponse 

let url = "https://restcountries.com/v3.1/all?fields=name,flags"

function GeoQuiz() {
    const [country, setCountry] = useState("")
    const [countries, setCountries] = useState([])
    const [options, setOptions] = useState([])
    const [round, setRound] = useState(1)
    const [score, setScore] = useState(0)

    // STATES
    // Nos différents states : le pays choisi aléatoirement à l'aide de l'API, le score, 
    // les différentes options/réponses, les tours etc

    // USEEFFECT + FONCTIONS DIVERSES 
    // Un useEffect qui vienne faire les req API (on pourra faire la req dans une fonction à part)
    // Il faudra une req pour recup un pays aléatoire ainsi que les 4 réponses (dc la bonne réponse + 3 aléatoires)
    // Il ne faudra pas oublier de shuffle les réponses proposées...

    // Pour le reste la logique est similaire au quiz précédent, une différence à noter : 
    // A chaque tour on corrige en affichant, si besoin la bonnee réponse 
    // On pourra utiliser setTimeout pour adfficher qqes secondes la correction et passer à la question suivante 

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            // On enregistre l'ensemble des pays dans un state countries
            setCountries(data)

            // On recup notre drapeau aléatoire et on ajoute le pays en question au state country
            let randomCountry = data[Math.round(Math.random() * data.length)] 
            setCountry(randomCountry)

            // On appelle la fonction qui vient chercher les réponses aléatoires 
            // on lui passe lma réponse de l'API et le pays aléatoire recuperé 
            fetchOptions(data, randomCountry)
        })
        .catch(err => console.log(err))
    }, [round]) // Ici le tableau ede dcépendance contient round -> dès que le state round change l'effet est déclenché

    function fetchOptions(data, randomCountry) {
        // On initialise le tableau d'options avec pour commencer la bonne réponse
        let optionsArray = [randomCountry]

        for (let i=0; i < 3; i++) {
            // On enlève les potentiels doublons du tableau des pays
            let filteredCountries = data.filter(elem => !optionsArray.includes(elem))

            // On recup une option au hasard 
            let option = filteredCountries[Math.round(Math.random() * filteredCountries.length)]

            // On ajoute l'option au tableau des options
            optionsArray.push(option)
        }

        // On vient mélanger l'ordre des réponses afin de ne pas avoir la bonne réponse toujours en 
        // première position
        optionsArray = shuffle(optionsArray)
        setOptions(optionsArray)
    }

    function handleClick(option) {
        // Vérification de la réponse et alert qui nous félicite ou nous corrige
        if (option.name.common === country.name.common) {
            alert("Bonne réponse !")
            setScore(score + 1)
        } else {
            alert("Mauvaise réponse, la solution était " + country.name.common)
        }

        // on passe au round suivant
        setRound(round + 1)
    } 

    // On remet score et round à zéro lorsque l'on clique sur recommencer 
    function handleReset() {
        setScore(0)
        setRound(0)
    }

    // Fonction de shuffle afin de mélanger les réponses proposées
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          // Generate a random index j such that 0 ≤ j ≤ i
          const j = Math.floor(Math.random() * (i + 1));
          // Swap elements at indices i and j
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    return ( 
        <>
            
            { round < 5 ? 
                <>
                    <h3>Score : {score} / 5</h3>

                    {country && <img src={country.flags.svg} alt={country.flags.alt} />}

                    {options && options.map((option, index) => (
                        <button key={index} onClick={() => handleClick(option)}>{option.name.common}</button>
                    ))}
                </>
                
                :

                <>
                
                    <h2>Fin de partie !</h2>
                    <h3>Score : {score} / 5</h3>

                    <button onClick={() => handleReset()}>Recommencer</button>
                
                </>
                
            }
        </>
     )
}

export default GeoQuiz 