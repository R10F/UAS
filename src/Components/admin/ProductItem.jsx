import React from "react";

class ProductItem extends React.Component {
  constructor(props) {
    super(props);
  }

  editProduct = (e) => {
    e.preventDefault();

    const input = e.target.getElementsByClassName('form-control');

    this.props.editProduct(this.props.product.id, {
      name: input[0].value,
      price: input[1].value,
      color: input[2].value
    });
  }

  render() {
    return (
      <tr>
        <td><img src={this.props.product.src} className="w-50" alt={this.props.product.nama} /></td>
        <td>{this.props.product.nama}</td>
        <td>{'Rp ' + this.props.product.harga}</td>
        <td>{this.props.product.rating ? this.props.product.rating : '-'}</td>
        <td>{this.props.product.color}</td>
        <td>
          <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target={'#editProductModal-' + this.props.product.id}>Edit</button>
        </td>

        <div className="modal fade" id={"editProductModal-" + this.props.product.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header text-center">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit Product
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <form onSubmit={this.editProduct}>
                <div className="modal-body text-start">
                  <div className="mb-4">
                    <label htmlFor={"editProductModalInput-" + this.props.product.id} className="form-label">Name</label>
                    <input type="text" className="form-control" id={"editProductModalInput-" + this.props.product.id} defaultValue={this.props.product.nama} />
                  </div>

                  <label htmlFor={"editProductModalInput-" + this.props.product.id} className="form-label">Price</label>
                  <div className="input-group mb-4">
                    <span class="input-group-text" id="basic-addon1">Rp</span>
                    <input type="text" className="form-control" id={"editProductModalInput-" + this.props.product.id} defaultValue={this.props.product.harga} />
                  </div>

                  <div className="mb-4">
                    <label htmlFor={"editProductModalInput-" + this.props.product.id} className="form-label">Color</label>
                    <input type="text" className="form-control" id={"editProductModalInput-" + this.props.product.id} defaultValue={this.props.product.color} />
                  </div>
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </tr>
    );
  }
}

export default ProductItem;