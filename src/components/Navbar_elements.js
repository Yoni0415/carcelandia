import styled from "styled-components";


// este seria el container general
export const Container = styled.div `
    widht:100%; 
    height: 70px;
    background-color:#23394d;
`;


// este seria el Wrapper (envoltorio de componentes)
export const Wrapper = styled.div `
    widht:100%; 
    max-widht: 1300px;
    height: 100%;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    margin:auto;
`;

// este seria el contenedor del logo
export const LogoContainer = styled.div `
    margin-left: 0.5rem;
    display:flex;
    align-items:center;
    font-size:1.2rem;
    font-family: sans-serif;

    p{
        &:nth-child(2){
            font-size:1.5rem;
            color:#fff;

        }

        &: nth-child(3){
            font-size:1.5rem;
            font-weight: 500;
            color:#e07924;
            
        }

      }

    svg{
        fill:#e07924;
        margin-right: 0.5rem;
    }





`;

// este seria el contenedor del menu
export const Menu = styled.ul `
    height: 100%;
    display:flex;
    justify-content:space-between;
    list-style: none;

    @media screen and (max-width: 960px){
      
        position:absolute;
        top:50px;
        left:${({open})=> open ? "0": "100%"};
        width:100%;
        height:90vh;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        transition: 0.5s all ease;
        background-color:#23394d;
        
    }



`;

// este seria el contenedor de los Items del menu
export const MenuItem = styled.li `
    heigh:100%;

    @media screen and (max-width: 960px){
       
        width:100%;
        height:70px;
        display:flex;
        justify-content:center;
        align-items:center;
       

    }






`;

// este seria contenedor link de los items
export const MenuItemLink = styled.a `
    display:flex;
    justify-content: center;
    align-items:center;
    height:100%;
    padding: 0.5rem 2.5rem;
    color: #64b2ff;
    font-family:sans-serif;
    font-size: 1rem;
    font-weight:300;
    cursor:pointer;
    transition: 0.5s all ease;

    &:hover{
        color:#fff;
        background-color:#e0792a;
        transition: 0.5s all ease;
    }
    div{
        width:100%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;

        svg{
            display:none;
            fill:#e07924;
            margin-right: 0.5rem;  
            }

       
    }


    

    @media screen and (max-width: 960px){
        width:100%;
        div{
            width:60%;
            height:100%;
            display:flex;
            justify-content:left;
            align-items:center;
    
            svg{
                display:flex;
                fill:#e07924;
                margin-right: 0.5rem;  
                }
    
           
        }

    }


   


`;


// este seria contenedor link de los items
export const MobileIcon = styled.div `
    display:none;
    
    @media screen and (max-width: 960px){
        
        display:flex;
        align-items:center;
        cursor:pointer;
        

        svg{
            fill:#e07924;
            margin-right: 0.5rem;
        }

    }
  
`;