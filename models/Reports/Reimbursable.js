export default class Reimbursable {
  constructor() {
    this.rnc = '';
    this.ncf = '';
    this.invoiceDate = '';
    this.details = '';
    this.businessType = '';
    this.provider = '';
    this.paymentMethod = '';
    this.tip = "0";
    this.itbis = "0";
    this.subTotal = "0";
    this.total = 0;
    this.userId = null;
    this.type = '';
    this.hasTip = false;
    this.hasItbis = false;
  }
}
