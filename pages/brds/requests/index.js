import React, { Component } from 'react';
import { Button, Table } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Layout from '../../../components/Layout';
import Brd from '../../../ethereum/brd';
import RequestRow from '../../../components/RequestRow';
import FundForm from '../../../components/FundForm';

class BrdIndex extends Component {
  static async getInitialProps(props) {
    const { address } = props.query;
    const brd = Brd(address);
    const requestCount = await brd.methods.getRequestsCount().call();
    const approversCount = await brd.methods.approversCount().call();

    const requests = await Promise.all(
      Array(parseInt(requestCount))
        .fill()
        .map((element, index) => {
          return brd.methods.requests(index).call();
        })
    );
    return { address, requests, requestCount, approversCount };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          approversCount={this.props.approversCount}
        />
      );
    });
  }

  render() {
    const { Header, Row, HeaderCell, Body } = Table;

    return (
      <Layout>
        <Link route={`/brds/${this.props.address}`}>
          <a>Back</a>
        </Link>
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
                <HeaderCell>Recipient</HeaderCell>
                <HeaderCell>Approval Count</HeaderCell>
                <HeaderCell>Approve</HeaderCell>
                <HeaderCell>Finalize</HeaderCell>
              </Row>
            </Header>
            <Body>{this.renderRows()}</Body>
          </Table>
          <h3 style={{ marginTop: 33 }}>Need to fund?</h3>
          <FundForm address={this.props.address} />
        </div>
      </Layout>
    );
  }
}

export default BrdIndex;
