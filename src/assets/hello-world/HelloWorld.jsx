import React from 'react'

function HelloWorld() {
    const props = {
        text: "hellooooooodadado"

    }
    return (
        <div> 
            <HeaderHelloWorld {...props}/>
            <ParagraphHelloWorld />
        </div>
    )
}

function HeaderHelloWorld({text = " lupa kasih teks"}) {

  return (
    <h1 style={{
      color: "red",
      backgroundColor: "aqua",
    }}>{text.toUpperCase()}</h1>
  );
}

function ParagraphHelloWorld() {
  const text = "halo gauyssssss";
  const style = {
    color: "blue",
    backgroundColor: "yellow",
  };
  return (
    <p style={style}>{text.toLowerCase()}</p>
  )
}

export default HelloWorld;


