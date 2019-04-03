import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Brd from '../../ethereum/brd';
import web3 from '../../ethereum/web3';
import FundForm from '../../components/FundForm';
import { Link } from '../../routes';

class BrdShow extends Component {
  static async getInitialProps(props) {
    const brd = Brd(props.query.address);

    const summary = await brd.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      minimumContribution,
      balance,
      requestsCount,
      approversCount,
      manager
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Manager Address',
        description: 'The Manager who owns this room',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minimumContribution,
        meta: 'Funding Minimum',
        description: 'You must fund at least this much to participate'
      },
      {
        header: requestsCount,
        meta: 'Total Deals'
      },
      {
        header: approversCount,
        meta: 'Total Members'
      },
      {
        header: `${web3.utils.fromWei(balance, 'ether')} ETH`,
        meta: 'House Balance'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <Link route={`/`}>
          <a>Back</a>
        </Link>

        <Grid style={{ marginTop: 10 }}>
          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>

            <Grid.Column width={6}>
              <FundForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/brds/${this.props.address}/requests`}>
                <a>
                  <Button color='green'>View Deals</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Layout>
    );
  }
}

export default BrdShow;
