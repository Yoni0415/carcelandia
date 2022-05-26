import React from 'react';
import { Container,Wrapper,LogoContainer,Menu,MenuItem,MenuItemLink } from './Navbar_elements';

// Importacion de iconos de Font Awesome
import { FaBattleNet } from "react-icons/fa";

// Funcion llamada NavBar 
const Navbar = () =>{

    return(
        <Container>
           <Wrapper>
                <LogoContainer>
                    <FaBattleNet/>
                    <p>
                        Vector -
                    </p>
                    <p>
                        Negro
                    </p>
                </LogoContainer>
                    <Menu>
                        {/* ITEM 1 */}
                        <MenuItem>
                            <MenuItemLink>
                                HOME
                            </MenuItemLink>
                        </MenuItem>
                        {/* ITEM 2 */}
                        <MenuItem>
                            <MenuItemLink>
                                ABOUT-ME
                            </MenuItemLink>
                        </MenuItem>
                        {/* ITEM 3 */}
                        <MenuItem>
                            <MenuItemLink>
                                PORTFOLIO
                            </MenuItemLink>
                        </MenuItem>
                        {/* ITEM 4 */}
                        <MenuItem>
                            <MenuItemLink>
                                CONTACTAME
                            </MenuItemLink>
                        </MenuItem>
                    </Menu>
           </Wrapper>

        </Container>


    );
}

// Fin de la Función
export default Navbar;