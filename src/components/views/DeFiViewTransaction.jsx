import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, Input } from 'formsy-react-components';
import BigNumber from 'bignumber.js';

import GA from 'lib/GoogleAnalytics';
import Loader from '../Loader';
import QuillFormsy from '../QuillFormsy';
import FormsyImageUploader from '../FormsyImageUploader';
import GoBackButton from '../GoBackButton';
import { isOwner, getTruncatedText, history } from '../../lib/helpers';
import {
  checkForeignNetwork,
  checkProfile,
  authenticateIfPossible,
  checkBalance,
} from '../../lib/middleware';
import LoaderButton from '../LoaderButton';

import DACservice from '../../services/DACService';
import DAC from '../../models/DAC';
import User from '../../models/User';
import ErrorPopup from '../ErrorPopup';
import { Consumer as WhiteListConsumer } from '../../contextProviders/WhiteListProvider';



class DeFiViewTransaction extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            isLoading: true,
            isSaving: false,
            formIsValid: false,

            defiTransaction: new DeFiTransaction({
                owner: props.currentUser,
            }),

            isBlocking: false,
        }
    }    

    render() {
        const { isNew } = this.props;
        const { isLoading, isSaving, dac, formIsValid, isBlocking } = this.state;
    
        return (
          <div id="defi-view-transaction">


          </div>
        );
    }
}




DeFiViewTransaction.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    transactionId: PropTypes.string,
  };
  
DeFiViewTransaction.defaultProps = { transactionId = null };
  
  export default DeFiViewTransaction;
  