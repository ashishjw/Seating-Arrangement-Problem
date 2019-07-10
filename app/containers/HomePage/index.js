/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { Button, Divider, Form, Label } from 'semantic-ui-react';
import BookingDetails from 'components/BookingDetails';

// @TODO- Need to use json-server to mock the data.
const PSeats1 = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const GSeats1 = [0, 0, 0, 0, 0, 0];
const SSeats1 = [-1, 0, 0, 0, 0, 0, 0]; // -1 Seats are not available for that Seating class.

const PSeats2 = [0, 0, 0, 0, 0, 0, 0];
const GSeats2 = [-1, 0, 0, 0, 0, 0];
const SSeats2 = [-1, 0, 0, 0, 0, 0, 0, 0];

const PSeats3 = [0, 0, 0, 0, 0];
const GSeats3 = [0, 0, 0, 0, 0, 0, 0, 0];
const SSeats3 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

export default class HomePage extends React.PureComponent {
  state = {
    unAvailableSeats: [],
    screenNumber: '',
    seatNumber: '',
    success: false,
    seatUnavailable: false,
    formError: false,
  };

  render() {
    const {
      screenNumber,
      seatNumber,
      success,
      seatUnavailable,
      formError,
      unAvailableSeats,
    } = this.state;

    return (
      <div>
        <Form error={formError}>
          <h1>Movie Seat Booking Page</h1>
          <Divider />
          <Form.Field>
            <label htmlFor="number">Enter Screen Number </label>
            <Form.Input
              value={screenNumber}
              pattern="[1-3]"
              onChange={this.handleScreenNumberChange}
              placeholder="Please enter a screen number"
              required
            />
            <br />
            <label htmlFor="text">Enter Seat Numbers </label>
            <Form.Input
              value={seatNumber}
              pattern="^[A-C][A-C0-9,]*$"
              onChange={this.handleSeatNumberChange}
              placeholder="Please enter seat numbers"
              required
            />
          </Form.Field>
          <Button primary onClick={this.checkSeatAvailability}>
            Book Seats
          </Button>
        </Form>
        {success && (
          <BookingDetails
            screenNumber={screenNumber}
            seatNumber={seatNumber.split(',')}
          />
        )}
        {!success && seatUnavailable && (
          <Label>
            {' '}
            {unAvailableSeats.join()} Not available, Please select different
            Seats
          </Label>
        )}
      </div>
    );
  }

  handleSeatNumberChange = event => {
    this.setState({
      seatNumber: event.target.value,
      success: false,
      seatUnavailable: false,
    });
  };

  handleScreenNumberChange = event => {
    this.setState({
      screenNumber: event.target.value,
      success: false,
      seatUnavailable: false,
    });
  };

  checkSeatAvailability = () => {
    const error = this.validateForm();
    if (error) {
      this.setState({ formError: error });
      return;
    }
    let success = true;
    const { screenNumber } = this.state;
    const seatNumber = this.state.seatNumber.split(',');
    const unAvailabaleSeats = [];
    const availableSeats = [];
    if (screenNumber === '1') {
      for (let i = 0; i < seatNumber.length; i += 1) {
        const currSeatNumber = seatNumber[i];

        if (currSeatNumber.includes('A')) {
          const seat = Number(currSeatNumber.replace('A', '')) - 1;
          if (
            seat < PSeats1.length - 1 &&
            PSeats1[seat] !== 1 &&
            PSeats1[seat] !== -1
          ) {
            availableSeats.push(currSeatNumber);
          } else {
            unAvailabaleSeats.push(currSeatNumber);
            success = false;
          }
        } else if (currSeatNumber.includes('B')) {
          const seat = Number(currSeatNumber.replace('B', '')) - 1;
          if (
            seat < GSeats1.length - 1 &&
            GSeats1[seat] !== 1 &&
            GSeats1[seat] !== -1
          ) {
            availableSeats.push(currSeatNumber);
          } else {
            unAvailabaleSeats.push(currSeatNumber);
            success = false;
          }
        } else if (currSeatNumber.includes('C')) {
          const seat = Number(currSeatNumber.replace('C', '')) - 1;
          if (
            seat < SSeats1.length - 1 &&
            SSeats1[seat] !== 1 &&
            SSeats1[seat] !== -1
          ) {
            availableSeats.push(currSeatNumber);
          } else {
            unAvailabaleSeats.push(currSeatNumber);
            success = false;
          }
        }
      }
    } else if (screenNumber === '2') {
      for (let i = 0; i < seatNumber.length; i += 1) {
        const currSeatNumber = seatNumber[i];

        if (currSeatNumber.includes('A')) {
          const seat = Number(currSeatNumber.replace('A', '')) - 1;
          if (
            seat < PSeats2.length - 1 &&
            PSeats2[seat] !== 1 &&
            PSeats2[seat] !== -1
          ) {
            availableSeats.push(currSeatNumber);
          } else {
            unAvailabaleSeats.push(currSeatNumber);
            success = false;
          }
        } else if (currSeatNumber.includes('B')) {
          const seat = Number(currSeatNumber.replace('B', '')) - 1;
          if (
            seat < GSeats2.length - 1 &&
            GSeats2[seat] !== 1 &&
            GSeats2[seat] !== -1
          ) {
            availableSeats.push(currSeatNumber);
          } else {
            unAvailabaleSeats.push(currSeatNumber);
            success = false;
          }
        } else if (currSeatNumber.includes('C')) {
          const seat = Number(currSeatNumber.replace('C', '')) - 1;
          if (
            seat < SSeats2.length - 1 &&
            SSeats2[seat] !== 1 &&
            SSeats2[seat] !== -1
          ) {
            availableSeats.push(currSeatNumber);
          } else {
            unAvailabaleSeats.push(currSeatNumber);
            success = false;
          }
        }
      }
    } else if (screenNumber === '3') {
      for (let i = 0; i < seatNumber.length; i += 1) {
        const currSeatNumber = seatNumber[i];

        if (currSeatNumber.includes('A')) {
          const seat = Number(currSeatNumber.replace('A', '')) - 1;
          if (
            seat < PSeats3.length - 1 &&
            PSeats3[seat] !== 1 &&
            PSeats3[seat] !== -1
          ) {
            availableSeats.push(currSeatNumber);
          } else {
            unAvailabaleSeats.push(currSeatNumber);
            success = false;
          }
        } else if (currSeatNumber.includes('B')) {
          const seat = Number(currSeatNumber.replace('B', '')) - 1;
          if (
            seat < GSeats3.length - 1 &&
            GSeats3[seat] !== 1 &&
            GSeats3[seat] !== -1
          ) {
            availableSeats.push(currSeatNumber);
          } else {
            unAvailabaleSeats.push(currSeatNumber);
            success = false;
          }
        } else if (currSeatNumber.includes('C')) {
          const seat = Number(currSeatNumber.replace('C', '')) - 1;
          if (
            seat < SSeats3.length - 1 &&
            SSeats3[seat] !== 1 &&
            SSeats3[seat] !== -1
          ) {
            availableSeats.push(currSeatNumber);
          } else {
            unAvailabaleSeats.push(currSeatNumber);
            success = false;
          }
        }
      }
    }
    this.setState({ unAvailabaleSeats });
    if (success) {
      this.bookSeats(screenNumber, availableSeats);
      this.setState({ success: true });
    } else {
      this.setState({ seatUnavailable: true });
    }
  };

  bookSeats(screenNumber, availableSeats) {
    for (let j = 0; j < availableSeats.length; j += 1) {
      const seat =
        Number(availableSeats[j].replace(availableSeats[j].charAt(0), '')) - 1;
      switch (`${screenNumber}-${availableSeats[j].charAt(0)}`) {
        case '1-A':
          PSeats1[seat] = 1;
          break;
        case '1-B':
          GSeats1[seat] = 1;
          break;
        case '1-C':
          SSeats1[seat] = 1;
          break;
        case '2-A':
          PSeats2[seat] = 1;
          break;
        case '2-B':
          GSeats2[seat] = 1;
          break;
        case '2-C':
          SSeats2[seat] = 1;
          break;
        case '3-A':
          PSeats3[seat] = 1;
          break;
        case '3-B':
          GSeats3[seat] = 1;
          break;
        case '3-C':
          SSeats3[seat] = 1;
          break;
        default:
          return false;
      }
    }
  }

  // @TODO - Need to consider following form validator function as a generic one.
  validateForm = () => {
    const { seatNumber, screenNumber } = this.state;
    const screenNumberPattern = RegExp('[1-3]');
    const seatNumberPattern = RegExp('^[A-C][A-C0-9,]*$');

    return (
      seatNumber === '' ||
      screenNumber === '' ||
      !screenNumberPattern.test(screenNumber) ||
      !seatNumberPattern.test(seatNumber)
    );
  };
}
