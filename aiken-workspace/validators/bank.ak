use aiken/crypto.{VerificationKeyHash}
use cardano/transaction.{OutputReference, Transaction}

pub type BankDatum {
  owner: VerificationKeyHash,
}

pub type Action {
  Deposit
  Withdraw
}

validator savings {
  spend(
    _datum: Option<BankDatum>,
    _redeemer: Action,
    _target: OutputReference,
    _tx_info: Transaction,
  ) {
    True
  }

  else(_) {
    fail
  }
}
