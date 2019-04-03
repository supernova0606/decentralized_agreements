import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Brd from '../ethereum/brd';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class FundForm extends Component {
  state = {
    value: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    const brd = Brd(this.props.address);

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await brd.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });

      Router.replaceRoute(`/brds/${this.props.address}`);
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
    this.setState({ loading: false, value: '' });
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label>Amount to Fund</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label='ETH'
            labelPosition='right'
          />
        </Form.Field>
        <Message
          error
          header='Something went wrong:'
          content={this.state.errorMessage}
        />
        <Button color='green' loading={this.state.loading}>
          Fund
        </Button>
      </Form>
    );
  }
}

export default FundForm;
