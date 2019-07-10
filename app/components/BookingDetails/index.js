import React from 'react';
import { Label } from 'semantic-ui-react';

const SeatPrices = {
  Platinum: 320,
  Gold: 280,
  Silver: 240,
};

const Taxes = {
  Service: 14,
  SwachhBharat: 0.5,
  KrishiKalyan: 0.5,
};

export default class BookingDetails extends React.PureComponent {
  state = {
    seatNumber: [],
    screenNumber: '',
    subTotal: 0,
    totalPrice: 0,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    // TODO- Need to update deep equality check for array
    if (
      nextProps.screenNumber !== prevState.screenNumber ||
      (prevState.seatNumber &&
        nextProps.seatNumber &&
        nextProps.seatNumber.length !== prevState.seatNumber.length)
    ) {
      const { subTotal, totalPrice } = getCalculatedPrice(nextProps.seatNumber);
      return {
        seatNumber: nextProps.seatNumber,
        screenNumber: nextProps.screenNumber,
        subTotal,
        totalPrice,
      };
    }

    return null;
  }

  render() {
    const { subTotal, totalPrice, screenNumber } = this.state;

    return (
      <div>
        <Label>Print: Successfully Booked - Show {screenNumber}</Label>
        <Label>Subtotal: Rs. {subTotal}</Label>
        <Label>Service Tax: Rs. {getPercentage(subTotal, Taxes.Service)}</Label>
        <Label>
          Swachh Bharat Tax: Rs. {getPercentage(subTotal, Taxes.SwachhBharat)}
        </Label>
        <Label>
          Krishi Kalyan Tax: Rs. {getPercentage(subTotal, Taxes.KrishiKalyan)}
        </Label>
        <Label>Total: Rs. {totalPrice}</Label>
      </div>
    );
  }
}

// @TODO - Need to consider following methods as a utility methods.
const getCalculatedPrice = seatNumber => {
  let subTotal = 0;
  let totalPrice = 0;
  for (let i = 0; i < seatNumber.length; i += 1) {
    if (seatNumber[i].indexOf('A') > -1) {
      subTotal += SeatPrices.Platinum;
    } else if (seatNumber[i].indexOf('B') > -1) {
      subTotal += SeatPrices.Gold;
    } else if (seatNumber[i].indexOf('C') > -1) {
      subTotal += SeatPrices.Silver;
    }
  }
  totalPrice = subTotal + getPercentage(subTotal, Taxes.Service);
  totalPrice += getPercentage(subTotal, Taxes.SwachhBharat);
  totalPrice += getPercentage(subTotal, Taxes.KrishiKalyan);
  return { subTotal, totalPrice };
};

const getPercentage = (num, per) => num * (per / 100);
