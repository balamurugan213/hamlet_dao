import Layout from '../components/layout';
import { Grid,Icon} from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

export default function Gallery() {
  return (
    <Layout>
      <Grid>
        <Grid.Row columns={3}>
          <Grid.Column>
          
            </Grid.Column>
            <Grid.Column>
          <h3>Still in Development</h3>
            </Grid.Column>
            <Grid.Column>
          
          </Grid.Column>
          
        </Grid.Row>
    </Grid>
  </Layout>
  )
}
