import { useState } from "react"


function Random() {
    const [student, setStudent] = useState("")

    let students = ["Bastien", "Nohlan", "Soen", "Ethan", "Mathis", "Amine", "Thomas"]

    function handleClick() {

        let interval = setInterval(() => {
            let random = Math.floor(Math.random() * students.length)
            setStudent(students[random])
        }, 50)

        setTimeout(() => clearInterval(interval), 3000)

    }

    function pickRandomStudent() {
        
        let random = Math.floor(Math.random() * students.length)

        let randomStudent = students[random]  

        students.splice(random, 1)

        if (students.length) {

            return randomStudent

        } else {

            return "Tous les élèves ont été déjà interrogés"
    
        }   
    }



    return ( 
        <>
            <h1>Random Student !!</h1>

            <button onClick={() => handleClick()}>Go !!</button>

            { student && 
            <>
                <img className="studentPic" src={"../public/" + student.toLowerCase() + ".jpg"} height="200px" width="200px" />
                <h2>{student}</h2>
            </>}



        </>
     )
}

export default Random 

