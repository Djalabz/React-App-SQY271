function Title({ name, age }) {

    let array = [
        {
            id: 1,
            content: "ok"
        }, 
        {
            id: 2,
            content: "nok"
        },
        {
            id: 3,
            content: "mok"
        }
    ]


    return ( 
        <>
            <h1>Bienvenue {name} tu as {age} ans</h1>

            {/* Avec .map on parcourt les tableaux dans le JSX */}
            {/* !! Chaque élément de liste generé doit avoir une clé unique (key) */}
            { array.map((elem, index) => 
                (<h2 key={index}>{elem.content}</h2>)
            )}

        </>
     );
}

export default Title