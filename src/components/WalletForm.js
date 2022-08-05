import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class WalletForm extends React.Component {
  render() {
    const { login } = this.props;
    return (
      <div>
        WalletForm
        {' '}
        {login}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.user.email,
});

WalletForm.propTypes = {
  login: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(WalletForm);
