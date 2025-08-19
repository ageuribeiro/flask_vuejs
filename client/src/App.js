import React, {useState, useEffect} from 'react' 

function App() {
  const [data, setData] = useState([{}])

  useEffect(()=>{
    fetch("/members").then(
      response => response.json())
      .then(
        data => {
          setData(data)
          console.log(data)
        })
  }, [])

  return (
    <div>
      
      {(typeof data.members === 'undefined') ? (
        <p>Loading...</p>
      ) : (
          data.members.map((member, i) =>(
            <p key={i}>{member}</p>
        ))
      )}
    </div>
  )
}

function MyButton(){
  return(
    <button>I´m Button</button>
  )
}


export default function MyApp(){
  return (
      <div>
        <h1>
          Bem-vindo ao meu aplicativo!
        </h1>
        <MyButton/>
      </div>
    );
}

