import styled, { keyframes } from 'styled-components'


const typing = keyframes `
    from {
        width: 0;
    }
    to {
        width: 14em;
    }
`

const blickCursor = keyframes `
    from {
        border-right-color: white;
    }
    to {
        border-right-color: transparent;
    }
`


export const Container2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin: 50px;

    p{
        font-size: 25px;
        font-family: "IBM Plex Sans";
    }

    .line {
        border-right: 2px solid white;
        font-size: 2em;
        text-align: center;
        margin: 0 auto;
        white-space: nowrap;
        overflow: hidden;
        height: 50px;
    }
    
    .typing-animation {
        animation: ${blickCursor} 500ms steps(50) infinite normal,
        ${typing} 6s steps(40) infinite normal both;
    }

    @media (max-width: 700px){
        display: flex;
        flex-direction: column;
        margin: 20px;
        .line{
            font-size: 1.0em;
            height: 25px;
        }
    }

`

export const Section = styled.section`

    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: center;

    @media (max-width: 700px){
        width: 50px;
    }

`

const appearFromLeft = keyframes `

    0% {
        transform: rotate(360deg);
    }
    50% {
        transform: rotate(350deg);
    }
    100%{
        transform: rotate(370deg)


`

export const AnimationContainer = styled.div`
    animation: ${appearFromLeft} 10s infinite;


    @media (max-width: 700px){
        img{
            width: 200px;
            height: 200px
        }
        
    }
    
    
`
