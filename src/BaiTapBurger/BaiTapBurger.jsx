import React, { Component } from 'react'
import { connect } from 'react-redux'
import "./BaiTapBurger.css"

class BaiTapBurger extends Component {
  renderBreadMid = () => {
    let {burger} = this.props
    return Object.entries(burger).map(([propsBurger, value], index) => {
      let breadMid = []
      for (var i = 0; i < value; i++) {
        breadMid.push (<div key={i} className={propsBurger}></div>)
      }
      return breadMid
    })
  }

  renderMenu = () => {
    let {menu, burger} = this.props
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button onClick={()=>{this.props.addBreadMid(propsMenu, 1)}} className='btn btn-primary'>+</button>
            {burger[propsMenu]}
            <button onClick={()=>{this.props.addBreadMid(propsMenu, -1)}} className='btn btn-danger'>-</button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
          
        </tr>
      )
    })

  }

  render() {
    return (
      <div className='container mt-4'>
        <h3 className='display-7 text-center'>Bài tập Burger</h3>
        <div className="row mt-4">
            <div className="col-md-7">
                <h4 className='text-center text-danger'>Bánh Burger của bạn</h4>
                <div className="breadTop"></div>
                  {this.renderBreadMid()}
                <div className="breadBottom"></div>
            </div>
            <div className="col-md-5">
              <h4 className='text-success'>Chọn thức ăn</h4>
              <table>
                <thead>
                  <tr>
                    <th>Thức ăn</th>
                    <th></th>
                    <th>Đơn giá</th>
                    <th>Thành tiền</th>
                  </tr>
                  {this.renderMenu()}
                </thead>
                <tfoot>
                  <tr>
                    <td colSpan={2}></td>
                    <td><strong>Tổng cộng:</strong></td>
                    <td>{this.props.total}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        burger: state.BurgerReducer.burger,
        menu: state.BurgerReducer.menu,
        total: state.BurgerReducer.total
    }
}

const mapDispatchToProps = dispatch => {
  return {
    addBreadMid: (propsBurger, amount) => {
      const action = {
        type: 'ADD_BREADMID',
        propsBurger,
        amount
      }
      dispatch(action)
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (BaiTapBurger)
