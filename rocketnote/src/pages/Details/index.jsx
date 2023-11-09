import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tags'
import { ButtonText } from '../../components/ButtonText'



export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>

              <ButtonText title="Excluir nota"/>

              <h1>Introdução ao React</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti doloremque voluptatem molestiae hic amet pariatur provident nam nihil esse. Reiciendis, rem! Quas velit beatae possimus vel maiores molestias temporibus incidunt!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quis est nemo itaque numquam officia commodi. Quia eos in assumenda nostrum, expedita dolor animi ab dolorum? Quis, alias! Sequi, commodi.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ut aspernatur, enim odit iure cumque iste hic consequuntur est. Perspiciatis modi ducimus dolor soluta fugiat, praesentium voluptates dolorem architecto at!
              </p>

      <Section title="Links úteis">
        <Links>
          <li><a href="#">https://rocketseat.com.br</a></li>
          <li><a href="#">https://rocketseat.com.br</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="express" />
        <Tag title="node" />
      </Section>



      <Button title="Voltar" />
      </Content>
      </main>
    </Container>
  )
}