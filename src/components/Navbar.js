import React, {useState} from 'react';
import { Container,Wrapper,LogoContainer,Menu,MenuItem,MenuItemLink, MobileIcon } from './Navbar_elements';

// Importacion de iconos de Font Awesome
import { FaBattleNet, FaBars,FaAppStore, FaApple,FaDev,FaFortAwesome} from "react-icons/fa";
import { IconContext } from "react-icons";

// Funcion llamada NavBar 
const Navbar = () =>{
    const [showMobileMenu, setshowMobileMenu] = useState(false);

    return(
     
        <Container className='menu'>
           <Wrapper>

             
               
            <IconContext.Provider value={{style:{fontSize: "2em"}}}>
                    <LogoContainer>
                        <FaBattleNet/>
                        <p>
                           Turismo 
                        </p>
                        
                        <p>
                             /Saavedra
                        </p>
                    </LogoContainer>

                    <MobileIcon onClick={()=> setshowMobileMenu(!showMobileMenu)}>
                        <FaBars/>
                    </MobileIcon>

                    <Menu open={showMobileMenu}>
                        {/* ITEM 1 */}
                        <MenuItem>
                            <MenuItemLink>
                            <div>
                                <FaAppStore/>
                                HOME
                            </div>
                            
                            </MenuItemLink>
                        </MenuItem>
                        {/* ITEM 2 */}
                        <MenuItem>
                            <MenuItemLink>
                            <div>
                                <FaApple/>
                                ABOUT-ME
                            </div>
                                
                            </MenuItemLink>
                        </MenuItem>
                        {/* ITEM 3 */}
                        <MenuItem>
                            <MenuItemLink>
                            <div>
                                <FaDev/>
                                PORTFOLIO
                            </div>
                                
                            </MenuItemLink>
                        </MenuItem>
                        {/* ITEM 4 */}
                        <MenuItem>
                            <MenuItemLink>
                            <div>
                                <FaFortAwesome/>
                                CONTACTAME
                            </div>
                                
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>

                  


            </IconContext.Provider>    
           
           
           </Wrapper>

        </Container>

        




    );
}

// Fin de la Función
export default Navbar;