import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';
import { Link } from '../routes';

class BrdIndex extends Component {
  static async getInitialProps() {
    const brds = await factory.methods.getDeployedBrds().call();
    return { brds };
  }

  renderBrds() {
    const items = this.props.brds.map(address => {
      return {
        header: address,
        description: (
          <div>
            <Link route={`/brds/${address}/requests`}>
              <a>View</a>
            </Link>
          </div>
        ),
        fluid: true
      };
    });
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <div>
          <h3 style={{ marginTop: 10 }}>Open Rooms</h3>
          <Link route='/brds/new'>
            <a>
              <Button floated='right' content='Create Room' color='green' />
            </a>
          </Link>
          {this.renderBrds()}
        </div>
      </Layout>
    );
  }
}

export default BrdIndex;
