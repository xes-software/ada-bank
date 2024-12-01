use aiken/collection/list
use aiken/crypto.{VerificationKeyHash}
use cardano/transaction.{OutputReference, Redeemer, Transaction}

// pub type BankDatum {
//   owner: VerificationKeyHash,
// }

validator savings {
  spend(
    datum: Option<BankDatum>,
    _redeemer: Redeemer,
    _target: OutputReference,
    tx: Transaction,
  ) {
    True
  }

  else(_) {
    fail
  }
}
