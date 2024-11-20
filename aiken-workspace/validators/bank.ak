use cardano/transaction.{OutputReference, Transaction}

validator savings {
  spend(
    _datum: Option<Void>,
    _redeemer: Void,
    _target: OutputReference,
    _tx_info: Transaction,
  ) {
    True
  }

  else(_) {
    fail
  }
}
