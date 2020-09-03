

/* eslint-disable import/no-cycle */

import BasicModel from './BasicModel';


class DeFiTransaction extends BasicModel {
    static get CANCELED() {
        return 'Canceled';
    }
    
    static get PENDING() {
        return 'Pending';
    }
    
    static get ACTIVE() {
        return 'Active';
    }
    
    static get type() {
        return 'defitransaction';
    }
    
    // eslint-disable-next-line class-methods-use-this
    get type() {
        return DeFiTransaction.type;
    }

    constructor(data) {
        super(data);

        this.communityUrl = data.communityUrl || '';
        this.delegateId = data.delegateId || 0;
        this.status = data.status || DeFiTransaction.PENDING;
        this.ownerAddress = data.ownerAddress;


        this._transactionId = data._transactionId;
    }

}