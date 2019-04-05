import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Brd from '../../../ethereum/brd';
import RequestRow from '../../../components/RequestRow';
import FundForm from '../../../components/FundForm';
import web3 from '../../../ethereum/web3';

class BrdIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const brd = Brd(address);
    const requestCount = await brd.methods.getRequestsCount().call();
    const approversCount = await brd.methods.approversCount().call();
    const summary = await brd.methods.getSummary().call();
    const accounts = await web3.eth.getAccounts();

    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return brd.methods.requests(index).call();
        })
    );
    {
      console.log(this.props);
    }

    return {
      address,
      requests,
      requestCount,
      approversCount,
      accounts,
      minimumContribution: summary[0],
      balance: summary[1],
      manager: summary[4]
    };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          // secondRecipient={request.secondRecipient}
          approversCount={this.props.approversCount}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <Link route={`/`}>
          <a>Back</a>
        </Link>
        <h1>Room: {this.props.manager} ETH</h1>
        <h3>Room Balance: {this.props.balance / 1000000000000000000} ETH</h3>
        <div>
          <Link route={`/brds/${this.props.address}/requests/new`}>
            <a>
              <Button
                color='green'
                floated='left'
                style={{ marginBottom: 33, marginTop: 33 }}
              >
                New Deal
              </Button>
            </a>
          </Link>
          <Table>
            <Header>
              <Row>
                <HeaderCell>ID</HeaderCell>
                <HeaderCell>Description</HeaderCell>
                <HeaderCell>Amount</HeaderCell>
                <HeaderCell>Winning Address</HeaderCell>
                {/* <HeaderCell>Losing Address</HeaderCell> */}
                <HeaderCell>Approval Count</HeaderCell>
                <HeaderCell>True</HeaderCell>
                {/* <HeaderCell>False</HeaderCell> */}
                <HeaderCell>Finalize</HeaderCell>
              </Row>
            </Header>
            <Body>{this.renderRows()}</Body>
          </Table>
          <h1 style={{ marginTop: 33 }}>Need to fund?</h1>
          <FundForm address={this.props.address} />
        </div>
      </Layout>
    );
  }
}

export default BrdIndex;
