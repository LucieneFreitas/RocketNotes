import { RiShutDownLine } from 'react-icons/ri';
import {Container, Profile, Logout} from './styles';


export function Header(){
    return (
        <Container>
            <Profile>
                <img 
                src="https://github.com/LucieneFreitas.png" 
                alt="foto da Luciene"
                 />
                 <div>
                    <span>Bem-Vindo</span>
                    <strong>Luciene Freitas</strong>
                 </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    );
}
