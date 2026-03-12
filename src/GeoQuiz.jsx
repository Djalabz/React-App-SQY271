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

            setCountries(data)

            let country = data[Math.round(Math.random() * data.length)] 
            setCountry(country)
        })
        .catch(err => console.log(err))
    }, [])

    return ( 
        <>
            {country && <img src={country.flags.svg} alt={country.flags.alt} />}

        </>
     )
}

export default GeoQuiz 